from models.paper import Paper
from agents.summarizer_agent import summarize_text


def summarize_paper(db, paper_id):

    paper = (
        db.query(Paper)
        .filter(Paper.id == paper_id)
        .first()
    )

    if not paper:

        return None

    summary = summarize_text(
        paper.abstract
    )

    return {
        "title": paper.title,
        "summary": summary
    }