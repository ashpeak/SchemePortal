import json
import logging
from pymongo import MongoClient

class MySchemeDB:
    def __init__(self, uri="mongodb+srv://vikash:yvikash880@cluster0.d2gtk4z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", 
                 db_name="myscheme", 
                 schemes_collection="schemes", 
                 facets_collection="facets"):
        self.client = MongoClient(uri)
        self.db = self.client[db_name]
        self.schemes = self.db[schemes_collection]
        self.facets = self.db[facets_collection]
        logging.info("🔌 Connected to MongoDB.")

    def insert_many_documents(self, collection, documents, key_field=None):
        inserted = 0
        updated = 0
        skipped = 0

        for index, doc in enumerate(documents):
            try:
                key_value = self._extract_key(doc, key_field)
                if key_field and not key_value:
                    logging.warning(f"⚠️ Document at index {index} missing key '{key_field}'. Skipping.")
                    skipped += 1
                    continue

                filter_query = {f"{key_field}": key_value} if key_field else doc
                result = collection.update_one(filter_query, {"$set": doc}, upsert=True)

                if result.upserted_id:
                    inserted += 1
                elif result.modified_count:
                    updated += 1
                else:
                    skipped += 1

            except Exception as e:
                skipped += 1
                logging.error(f"❌ Skipped document at index {index} due to error: {e}")
                logging.debug(f"📄 Skipped document content: {json.dumps(doc, indent=2)}")

        return inserted, updated, skipped


    def _extract_key(self, doc, key_field):
        keys = key_field.split(".")
        for key in keys:
            if isinstance(doc, dict):
                doc = doc.get(key)
            else:
                return None
        return doc

    def upload_json(self, json_path):
        try:
            with open(json_path, "r", encoding="utf-8") as f:
                data = json.load(f)

            # 1. Upload schemes
            scheme_items = data.get("hits", {}).get("items", [])
            logging.info(f"📂 Found {len(scheme_items)} schemes to upload.")
            schemes_inserted, schemes_updated, schemes_skipped = self.insert_many_documents(
                self.schemes, scheme_items, key_field="fields.slug"
            )
            logging.info(f"📊 Schemes → Inserted: {schemes_inserted}, Updated: {schemes_updated}, Skipped: {schemes_skipped}")

            # 2. Upload facets
            facet_items = data.get("facets", [])
            logging.info(f"📂 Found {len(facet_items)} facets to upload.")
            facets_inserted, facets_updated, facets_skipped = self.insert_many_documents(
                self.facets, facet_items, key_field="identifier"
            )
            logging.info(f"📊 Facets → Inserted: {facets_inserted}, Updated: {facets_updated}, Skipped: {facets_skipped}")

        except Exception as e:
            logging.error(f"❌ Error uploading JSON: {e}", exc_info=True)


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO, format='%(levelname)s: %(message)s')
    db = MySchemeDB()
    db.upload_json("myscheme_enriched_data.json")
