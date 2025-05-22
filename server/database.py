import json
import logging
from pymongo import MongoClient

class MySchemeDB:
    def __init__(self, uri="mongodb+srv://vikash:yvikash880@cluster0.d2gtk4z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", 
                 db_name="myscheme", collection_name="schemes"):
        self.client = MongoClient(uri)
        self.db = self.client[db_name]
        self.collection = self.db[collection_name]
        logging.info("🔌 Connected to MongoDB.")

    def insert_items(self, items):
        if not items:
            logging.warning("⚠️ No items to insert.")
            return
        try:
            self.collection.insert_many(items, ordered=False)
            logging.info(f"✅ Inserted {len(items)} items into the database.")
        except Exception as e:
            logging.error(f"❌ Error inserting items: {e}")

    def delete_all_items(self):
        result = self.collection.delete_many({})
        logging.info(f"🗑️ Deleted {result.deleted_count} items from the database.")

    def upload_json(self, json_path):
        """
        Upload data from a JSON file and upsert it into the database.
        """
        try:
            with open(json_path, "r", encoding="utf-8") as f:
                data = json.load(f)

            items = data.get("hits", {}).get("items", [])
            total = len(items)
            if not items:
                logging.warning("⚠️ No items found in the JSON file.")
                return

            logging.info(f"📂 Loaded {total} items from {json_path}")

            inserted = 0
            updated = 0

            for index, item in enumerate(items):
                slug = item.get("fields", {}).get("slug")
                if not slug:
                    logging.warning(f"⚠️ Item at index {index} missing 'slug'. Skipping.")
                    continue

                result = self.collection.update_one(
                    {"fields.slug": slug},
                    {"$set": item},
                    upsert=True
                )

                if result.upserted_id:
                    inserted += 1
                    logging.info(f"🆕 Inserted new item for slug: {slug}")
                elif result.modified_count:
                    updated += 1
                    logging.info(f"🔄 Updated existing item for slug: {slug}")
                else:
                    logging.info(f"➖ No changes made for slug: {slug}")

            logging.info(f"\n📊 Upsert Summary → Inserted: {inserted}, Updated: {updated}, Skipped: {total - inserted - updated}")

        except Exception as e:
            logging.error(f"❌ Error uploading JSON: {e}", exc_info=True)


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO, format='%(levelname)s: %(message)s')
    db = MySchemeDB()
    db.upload_json("myscheme_enriched_data.json")
