from collections import Counter


def recommend_topics(papers):

    words = []

    for paper in papers:

        title = paper.title.lower()

        for word in title.split():

            word = word.strip(".,:;!?()[]")

            if len(word) > 3:
                words.append(word)

    stop_words = {
        "using",
        "with",
        "from",
        "into",
        "over",
        "under",
        "study",
        "based",
        "towards",
        "analysis",
        "research",
        "paper",
        "approach"
    }

    words = [w for w in words if w not in stop_words]

    common = Counter(words).most_common(10)

    return [
        word for word, count in common
    ]