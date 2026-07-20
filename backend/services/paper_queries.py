from models.paper import Paper


def get_all_papers(db):
    return db.query(Paper).all()


def get_paper(db, paper_id):
    return (
        db.query(Paper)
        .filter(Paper.id == paper_id)
        .first()
    )


def search_saved_papers(db, keyword):

    return (
        db.query(Paper)
        .filter(
            Paper.title.ilike(f"%{keyword}%")
        )
        .all()
    )


def delete_paper(db, paper_id):

    paper = get_paper(db, paper_id)

    if paper:

        db.delete(paper)

        db.commit()

        return True

    return False