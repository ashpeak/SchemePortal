from fastapi import FastAPI, Query, HTTPException
from typing import List, Optional
from pydantic import BaseModel
from motor.motor_asyncio import AsyncIOMotorClient
from bson.regex import Regex

app = FastAPI(title="MyScheme API")

# Async MongoDB client
client = AsyncIOMotorClient("mongodb+srv://vikash:yvikash880@cluster0.d2gtk4z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
db = client.myscheme
collection = db.schemes

class AgeRange(BaseModel):
    gte: Optional[int]
    lte: Optional[int]

class AgeGroup(BaseModel):
    pwd: Optional[AgeRange]
    ews: Optional[AgeRange]
    sc: Optional[AgeRange]
    general: Optional[AgeRange]
    obc: Optional[AgeRange]
    st: Optional[AgeRange]
    female: Optional[AgeRange]
    widowed: Optional[AgeRange]
    male: Optional[AgeRange]
    widow: Optional[AgeRange]
    pvtg: Optional[AgeRange]
    transgender: Optional[AgeRange]
    person_with_disability: Optional[AgeRange]
    particularly_vulnerable_tribal_groups_pvtg: Optional[AgeRange]

class SchemeFields(BaseModel):
    beneficiaryState: Optional[List[str]]
    schemeShortTitle: Optional[str]
    level: Optional[str]
    nodalMinistryName: Optional[str]
    schemeCategory: Optional[List[str]]
    schemeName: str
    schemeCloseDate: Optional[str]
    slug: str
    briefDescription: Optional[str]
    age: Optional[dict]
    tags: Optional[List[str]]

class Scheme(BaseModel):
    id: str
    fields: SchemeFields
    highlight: Optional[dict] = {}

@app.get("/schemes", response_model=List[Scheme])
async def get_schemes(skip: int = 0, limit: int = 20):
    """
    Get all schemes with pagination
    """
    cursor = collection.find().skip(skip).limit(limit)
    schemes = []
    async for doc in cursor:
        schemes.append(doc)
    return schemes

@app.get("/schemes/{slug}", response_model=Scheme)
async def get_scheme_by_slug(slug: str):
    """
    Get scheme by slug
    """
    scheme = await collection.find_one({"fields.slug": slug})
    if not scheme:
        raise HTTPException(status_code=404, detail="Scheme not found")
    return scheme

@app.get("/schemes/search", response_model=List[Scheme])
async def search_schemes(q: str = Query(..., min_length=2), skip: int = 0, limit: int = 20):
    """
    Search schemes by schemeName or briefDescription (case-insensitive)
    """
    regex = Regex(f".*{q}.*", "i")
    query = {
        "$or": [
            {"fields.schemeName": regex},
            {"fields.briefDescription": regex}
        ]
    }
    cursor = collection.find(query).skip(skip).limit(limit)
    results = []
    async for doc in cursor:
        results.append(doc)
    return results

@app.get("/schemes/ministry/{ministry_name}", response_model=List[Scheme])
async def get_schemes_by_ministry(ministry_name: str, skip: int = 0, limit: int = 20):
    """
    Filter schemes by nodalMinistryName (case-insensitive exact match)
    """
    query = {"fields.nodalMinistryName": {"$regex": f"^{ministry_name}$", "$options": "i"}}
    cursor = collection.find(query).skip(skip).limit(limit)
    results = []
    async for doc in cursor:
        results.append(doc)
    return results

@app.get("/schemes/category/{category}", response_model=List[Scheme])
async def get_schemes_by_category(category: str, skip: int = 0, limit: int = 20):
    """
    Filter schemes by schemeCategory (category contained in array)
    """
    query = {"fields.schemeCategory": {"$in": [category]}}
    cursor = collection.find(query).skip(skip).limit(limit)
    results = []
    async for doc in cursor:
        results.append(doc)
    return results

@app.get("/schemes/tag/{tag}", response_model=List[Scheme])
async def get_schemes_by_tag(tag: str, skip: int = 0, limit: int = 20):
    """
    Filter schemes by tags (tags contained in array)
    """
    query = {"fields.tags": {"$in": [tag]}}
    cursor = collection.find(query).skip(skip).limit(limit)
    results = []
    async for doc in cursor:
        results.append(doc)
    return results

@app.get("/facets")
async def get_facets():
    # Assuming only one root document containing the facets array
    doc = collection.find_one({}, {"_id": 0, "facets": 1})
    if not doc or "facets" not in doc:
        raise HTTPException(status_code=404, detail="Facets not found")
    return doc["facets"]