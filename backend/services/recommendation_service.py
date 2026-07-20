from models.paper import Paper
from agents.recommendation_agent import recommend_topics


def get_recommendations(db):

    papers = db.query(Paper).all()

    recommendations = recommend_topics(papers)

    return {
        "recommended_topics": recommendations
    }