from models.paper import Paper
from agents.research_gap_agent import identify_research_gap


def analyze_gap(db):

    papers = db.query(Paper).all()

    return identify_research_gap(
        papers
    )