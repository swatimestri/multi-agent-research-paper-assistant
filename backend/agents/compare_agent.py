from models.paper import Paper


def compare_papers(db, paper1_id, paper2_id):

    paper1 = db.query(Paper).filter(Paper.id == paper1_id).first()
    paper2 = db.query(Paper).filter(Paper.id == paper2_id).first()

    if not paper1 or not paper2:
        return None

    newer = (
        paper1.title
        if paper1.year > paper2.year
        else paper2.title
    )

    return {

        "paper1": {
            "title": paper1.title,
            "authors": paper1.authors,
            "year": paper1.year,
        },

        "paper2": {
            "title": paper2.title,
            "authors": paper2.authors,
            "year": paper2.year,
        },

        "comparison": {
            "same_year": paper1.year == paper2.year,
            "newer_paper": newer,
            "same_authors": paper1.authors == paper2.authors,
            "title_similarity": paper1.title[:30] == paper2.title[:30]
        }
    }