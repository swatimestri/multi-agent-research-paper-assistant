from models.paper import Paper
from agents.trend_agent import analyze_trends


def get_trends(db):

    papers = db.query(Paper).all()

    return analyze_trends(papers)