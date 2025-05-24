# db.py
from typing import Optional, List, Dict
from fastapi import HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
from bson.regex import Regex

class MongoDBClient:
    def __init__(self, uri: str, db_name: str = "myscheme",
                 schemes_collection: str = "schemes",
                 facets_collection: str = "facets"):
        self.client = AsyncIOMotorClient(uri)
        self.db = self.client[db_name]
        self.schemes = self.db[schemes_collection]
        self.facets = self.db[facets_collection]

    async def get_facets(self) -> List[Dict]:
        try:
            cursor = self.facets.find({}, {"_id": 0})
            return await cursor.to_list(length=None)
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Error retrieving facets: {str(e)}")

    async def fetch_schemes(
        self, query: dict = {}, skip: int = 0, limit: Optional[int] = 20, projection: dict = None
    ) -> List[Dict]:
        cursor = self.schemes.find(query, projection).skip(skip)
        if limit:
            cursor = cursor.limit(limit)
        results = []
        async for doc in cursor:
            doc["_id"] = str(doc["_id"])
            results.append(doc)
        return results

    async def fetch_scheme_by_slug(self, slug: str) -> Optional[Dict]:
        try:
            doc = await self.schemes.find_one({"fields.slug": slug})
            if doc:
                doc["_id"] = str(doc["_id"])
                return doc
            raise HTTPException(status_code=404, detail="Scheme not found")
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Error fetching scheme by slug: {str(e)}")

    async def search_schemes(self, keyword: str, skip: int = 0, limit: int = 20) -> List[Dict]:
        try:
            regex = Regex(f".*{keyword}.*", "i")
            query = {
                "$or": [
                    {"fields.schemeName": regex},
                    {"fields.briefDescription": regex}
                ]
            }
            return await self.fetch_schemes(query, skip, limit)
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Error searching schemes: {str(e)}")

    async def get_schemes_by_field(self, field: str, value: str, skip: int = 0, limit: int = 20) -> List[Dict]:
        try:
            query = {field: {"$in": [value]}} if field in ["fields.schemeCategory", "fields.tags"] else {
                field: {"$regex": f"^{value}$", "$options": "i"}
            }
            return await self.fetch_schemes(query, skip, limit)
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Error filtering schemes: {str(e)}")
