from services.search_service import search_papers
from services.recommendation_service import get_recommendations
from services.research_gap_service import analyze_gap
from services.trend_service import get_trends
from agents.summarizer_agent import summarize_text


def run_research_pipeline(db, query):

    # Search papers from arXiv
    papers = search_papers(query)

    print("=" * 50)
    print("Coordinator Agent Started")
    print("Query:", query)
    print("Number of papers found:", len(papers))
    print("=" * 50)

    summarized_papers = []

    if not papers:
        return {
            "query": query,
            "papers": [],
            "recommended_topics": get_recommendations(db)["recommended_topics"],
            "research_gap": analyze_gap(db),
            "trend": get_trends(db)
        }

    for i, paper in enumerate(papers):

        print(f"Processing Paper {i+1}: {paper['title']}")

        try:
            summary = summarize_text(paper["abstract"])

        except Exception as e:

            print("Summarization Error:", str(e))
            summary = "Summary unavailable."

        summarized_papers.append({
            "title": paper["title"],
            "authors": paper["authors"],
            "year": paper["year"],
            "url": paper["url"],
            "summary": summary
        })

    recommendations = get_recommendations(db)
    gap = analyze_gap(db)
    trends = get_trends(db)

    print("=" * 50)
    print("Coordinator Finished Successfully")
    print("Returning", len(summarized_papers), "papers")
    print("=" * 50)

    return {
        "query": query,
        "papers": summarized_papers,
        "recommended_topics": recommendations["recommended_topics"],
        "research_gap": gap,
        "trend": trends
    }