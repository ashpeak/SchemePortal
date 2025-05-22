import requests
import json
import time

import requests
import json
import time

def fetch_all_schemes(output_file="myscheme_all_data.json", total_pages=34, page_size=100):
    url = "https://api.myscheme.gov.in/search/v4/schemes"
    headers = {
        "User-Agent": "Mozilla/5.0 (Linux; Android 13; RMX3511 Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/135.0.7049.38 Mobile Safari/537.36",
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "sec-ch-ua-platform": "\"Android\"",
        "sec-ch-ua": "\"Android WebView\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
        "x-api-key": "tYTy5eEhlu9rFjyxuCr7ra7ACp4dv1RH8gWuHTDc",
        "sec-ch-ua-mobile": "?1",
        "origin": "https://www.myscheme.gov.in",
        "x-requested-with": "in.gov.negd.myscheme",
        "sec-fetch-site": "same-site",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        "accept-language": "en,en-US;q=0.9",
        "priority": "u=1, i"
    }

    all_data = {
        "summary": {},
        "facets": [],
        "hits": {
            "total": 0,
            "items": []
        }
    }

    for page in range(total_pages):
        offset = page * page_size
        params = {
            "lang": "en",
            "q": "[]",
            "keyword": "",
            "sort": "",
            "from": offset,
            "size": page_size
        }

        response = requests.get(url, headers=headers, params=params)
        if response.status_code == 200:
            json_data = response.json()
            data = json_data.get("data", {})

            if page == 0:
                all_data["summary"] = data.get("summary", {})
                all_data["facets"] = data.get("facets", [])
                all_data["hits"]["total"] = data.get("hits", {}).get("total", 0)

            items = data.get("hits", {}).get("items", [])
            if isinstance(items, list):
                all_data["hits"]["items"].extend(items)
                print(f"✅ Page {page + 1}/{total_pages} fetched. Items fetched: {len(items)}")
            else:
                print(f"⚠️ Page {page + 1} 'items' not found or not a list.")
        else:
            print(f"❌ Failed to fetch page {page + 1}: {response.status_code}")

        time.sleep(0.5)  # To avoid overwhelming the server

    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(all_data, f, ensure_ascii=False, indent=2)

    print(f"\n🎉 Done. Total items collected: {len(all_data['hits']['items'])}")




import json
import asyncio
import aiohttp
import re

# Helper function to clean and lowercase the slug
def clean_slug(slug):
    if not slug:
        return ""
    slug = slug.lower()
    slug = re.sub(r"[^\w\-]", "", slug.replace(" ", "-"))
    return slug

# Async function to fetch scheme URL and add data
async def fetch_and_update_item(session, item, base_url):
    slug = clean_slug(item["fields"].get("slug", ""))
    scheme_name = item["fields"].get("schemeName")

    if not slug:
        print(f"⚠️ Skipping item with missing slug for scheme: {scheme_name}")
        return item

    scheme_url = f"{base_url}{slug}.json?slug={slug}"
    try:
        async with session.get(scheme_url) as resp:
            if resp.status == 200:
                response_json = await resp.json()
                item["schemeUrl"] = scheme_url
                item["schemeData"] = response_json
                print(f"✅ {scheme_name} → {scheme_url}")
            else:
                print(f"❌ Failed: {scheme_name} → {scheme_url} ({resp.status})")
    except Exception as e:
        print(f"❌ Error fetching {scheme_url}: {e}")

    return item

# Main async function to load, process, and save the updated data
async def add_scheme_urls_to_items_async(json_filepath, output_filepath):
    with open(json_filepath, "r", encoding="utf-8") as f:
        data = json.load(f)

    items = data.get("hits", {}).get("items", [])
    print(f"🔍 Total items to process: {len(items)}")

    base_url = "https://www.myscheme.gov.in/_next/data/LMZwrwqIhM8X9YmbtfLVs/en/schemes/"
    
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_and_update_item(session, item, base_url) for item in items]
        updated_items = await asyncio.gather(*tasks)

    data["hits"]["items"] = updated_items

    with open(output_filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"\n💾 data saved to '{output_filepath}'")

# Entrypoint to run the async function
def run_enrichment(input_file="myscheme_all_data.json", output_file="myscheme_enriched_data.json"):
    asyncio.run(add_scheme_urls_to_items_async(input_file, output_file))

run_enrichment()
