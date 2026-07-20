from collections import Counter


def analyze_trends(papers):

    years = []

    for paper in papers:
        if paper.year:
            years.append(str(paper.year))

    trend = Counter(years)

    return dict(sorted(trend.items()))