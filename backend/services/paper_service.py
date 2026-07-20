from models.paper import Paper


def save_papers(db, papers, query):

    for paper in papers:

        existing = (
            db.query(Paper)
            .filter(Paper.url == paper["url"])
            .first()
        )

        if existing:
            continue

        new_paper = Paper(
            title=paper["title"],
            authors=", ".join(paper["authors"]),
            abstract=paper["abstract"],
            year=paper["year"],
            url=paper["url"],
            search_query=query
        )

        db.add(new_paper)

    db.commit()