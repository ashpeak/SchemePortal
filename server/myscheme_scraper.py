import json
import asyncio
import aiohttp
import re
import logging
from database import MySchemeDB

class MySchemeScraper:
    def __init__(self, input_file="myscheme_all_data.json", output_file="myscheme_enriched_data.json"):
        self.input_file = input_file
        self.output_file = output_file
        self.base_url = "https://www.myscheme.gov.in/_next/data/LMZwrwqIhM8X9YmbtfLVs/en/schemes/"
        self.db = MySchemeDB()

    def clean_slug(self, slug):
        if not slug:
            return ""
        slug = slug.lower()
        slug = re.sub(r"[^\w\-]", "", slug.replace(" ", "-"))
        return slug

    async def fetch_and_update_item(self, session, item):
        slug = self.clean_slug(item["fields"].get("slug", ""))
        scheme_name = item["fields"].get("schemeName")

        if not slug:
            logging.warning(f"⚠️ Skipping item with missing slug for scheme: {scheme_name}")
            return item

        scheme_url = f"{self.base_url}{slug}.json?slug={slug}"
        try:
            async with session.get(scheme_url) as resp:
                if resp.status == 200:
                    response_json = await resp.json()
                    item["schemeUrl"] = scheme_url
                    item["schemeData"] = response_json
                    logging.info(f"✅ {scheme_name} → {scheme_url}")
                else:
                    logging.error(f"❌ Failed: {scheme_name} → {scheme_url} ({resp.status})")
        except Exception as e:
            logging.error(f"❌ Error fetching {scheme_url}: {e}")

        return item

    async def enrich_items(self):
        with open(self.input_file, "r", encoding="utf-8") as f:
            data = json.load(f)

        items = data.get("hits", {}).get("items", [])
        logging.info(f"🔍 Total items to process: {len(items)}")

        async with aiohttp.ClientSession() as session:
            tasks = [self.fetch_and_update_item(session, item) for item in items]
            updated_items = await asyncio.gather(*tasks)

        data["hits"]["items"] = updated_items

        with open(self.output_file, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

        logging.info(f"\n💾 Data saved to '{self.output_file}'")


        self.db.delete_all_items()
        self.db.insert_items(updated_items)

    def run(self):
        asyncio.run(self.enrich_items())

if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
    scraper = MySchemeScraper()
    scraper.run()
