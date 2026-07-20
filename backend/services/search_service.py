import requests
import xml.etree.ElementTree as ET

ARXIV_URL = "http://export.arxiv.org/api/query"


def search_papers(query: str, limit: int = 10):

    params = {
        "search_query": f"all:{query}",
        "start": 0,
        "max_results": limit
    }

    response = requests.get(ARXIV_URL, params=params)

    if response.status_code != 200:
        return []

    root = ET.fromstring(response.text)

    namespace = {
        "atom": "http://www.w3.org/2005/Atom"
    }

    papers = []

    for entry in root.findall("atom:entry", namespace):

        title = entry.find("atom:title", namespace).text.strip()

        summary = entry.find("atom:summary", namespace).text.strip()

        published = entry.find("atom:published", namespace).text[:4]

        authors = []

        for author in entry.findall("atom:author", namespace):
            authors.append(
                author.find("atom:name", namespace).text
            )

        papers.append({
            "title": title,
            "authors": authors,
            "year": published,
            "abstract": summary,
            "url": entry.find("atom:id", namespace).text
        })

    return papers