from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db

from services.search_service import search_papers
from services.paper_service import save_papers

router = APIRouter(
    prefix="/search",
    tags=["Search Agent"]
)


@router.get("/")
def search(
    query: str,
    db: Session = Depends(get_db)
):

    papers = search_papers(query)

    save_papers(
        db,
        papers,
        query
    )

    return {
        "query": query,
        "count": len(papers),
        "papers": papers
    }