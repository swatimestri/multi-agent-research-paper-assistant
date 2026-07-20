from agents.compare_agent import compare_papers


def compare(db, paper1_id, paper2_id):

    return compare_papers(
        db,
        paper1_id,
        paper2_id
    )