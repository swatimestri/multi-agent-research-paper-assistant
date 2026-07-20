from sklearn.feature_extraction.text import TfidfVectorizer
from collections import Counter


def identify_research_gap(papers):

    abstracts = [
        paper.abstract
        for paper in papers
        if paper.abstract
    ]

    if len(abstracts) == 0:
        return {
            "message": "No abstracts available."
        }

    vectorizer = TfidfVectorizer(
        stop_words="english",
        max_features=20
    )

    matrix = vectorizer.fit_transform(abstracts)

    words = vectorizer.get_feature_names_out()

    scores = matrix.sum(axis=0).A1

    ranked = sorted(
        zip(words, scores),
        key=lambda x: x[1],
        reverse=True
    )

    top_keywords = [
        word
        for word, score in ranked[:10]
    ]

    return {
        "top_keywords": top_keywords,
        "research_gap":
            "These keywords dominate the literature. Less represented topics may indicate future research opportunities."
    }