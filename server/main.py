# main.py
from fastapi import FastAPI, HTTPException, Query
from typing import Optional, List, Dict, Any
from pydantic import BaseModel

from db import MongoDBClient  # ← import from db.py

# ----------------------------- Pydantic Models -----------------------------

class AgeRange(BaseModel):
    gte: Optional[int] = None
    lte: Optional[int] = None

class AgeGroup(BaseModel):
    pwd: Optional[AgeRange] = None
    ews: Optional[AgeRange] = None
    sc: Optional[AgeRange] = None
    general: Optional[AgeRange] = None
    obc: Optional[AgeRange] = None
    st: Optional[AgeRange] = None
    female: Optional[AgeRange] = None
    widowed: Optional[AgeRange] = None
    male: Optional[AgeRange] = None
    widow: Optional[AgeRange] = None
    pvtg: Optional[AgeRange] = None
    transgender: Optional[AgeRange] = None
    person_with_disability: Optional[AgeRange] = None
    particularly_vulnerable_tribal_groups_pvtg: Optional[AgeRange] = None

class SchemeFields(BaseModel):
    beneficiaryState: Optional[List[str]] = None
    schemeShortTitle: Optional[str] = None
    level: Optional[str] = None
    nodalMinistryName: Optional[str] = None
    schemeCategory: Optional[List[str]] = None
    schemeName: str
    schemeCloseDate: Optional[str] = None
    slug: str
    briefDescription: Optional[str] = None
    age: Optional[AgeGroup] = None
    tags: Optional[List[str]] = None

class Scheme(BaseModel):
    id: Optional[str] = None
    fields: SchemeFields
    highlight: Optional[Dict] = {}
    schemeData: Optional[Any] = None
    _id: Optional[str] = None

# ----------------------------- FastAPI App -----------------------------

app = FastAPI(title="MyScheme API")

mongo_client = MongoDBClient(
    uri="mongodb+srv://vikash:yvikash880@cluster0.d2gtk4z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)

@app.get("/", tags=["General"])
async def home():
    return {"message": "Server is running"}

@app.get("/facets", tags=["Facets"])
async def get_facets():
    return await mongo_client.get_facets()

@app.get("/schemes", response_model=List[Scheme], tags=["Schemes"])
async def get_schemes(skip: int = 0, limit: int = 20):
    return await mongo_client.fetch_schemes({}, skip, limit)

@app.get("/schemes/{slug}", response_model=Scheme, tags=["Schemes"])
async def get_scheme(slug: str):
    return await mongo_client.fetch_scheme_by_slug(slug)

@app.get("/schemes/ministry/{ministry_name}", response_model=List[Scheme], tags=["Schemes by ministries"])
async def get_schemes_by_ministry(ministry_name: str, skip: int = 0, limit: int = 20):
    return await mongo_client.get_schemes_by_field("fields.nodalMinistryName", ministry_name, skip, limit)

@app.get("/schemes/category/{category}", response_model=List[Scheme], tags=["Schemes categories"])
async def get_schemes_by_category(category: str, skip: int = 0, limit: int = 20):
    return await mongo_client.get_schemes_by_field("fields.schemeCategory", category, skip, limit)

@app.get("/schemes/tag/{tag}", response_model=List[Scheme], tags=["Search all Schemes"])
async def get_schemes_by_tag(tag: str, skip: int = 0, limit: int = 20):
    return await mongo_client.get_schemes_by_field("fields.tags", tag, skip, limit)

@app.get("/search/schemes", response_model=List[Scheme], tags=["Schemes"])
async def search_schemes_v2(
    keyword: Optional[str] = Query(None),
    q: Optional[str] = Query(None),  # placeholder
    sort: Optional[str] = Query(None),  # placeholder
    lang: Optional[str] = Query(None),  # placeholder
    from_: int = Query(0, alias="from"),
    size: int = Query(10)
):
    if keyword:
        return await mongo_client.search_schemes(keyword, skip=from_, limit=size)

    projection = {"schemeData": 0}
    return await mongo_client.fetch_schemes({}, skip=from_, limit=size, projection=projection)
