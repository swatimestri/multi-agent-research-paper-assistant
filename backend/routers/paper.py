from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db
from services.paper_queries import (
    get_all_papers,
    get_paper,
    search_saved_papers,
    delete_paper,
)

router = APIRouter(
    prefix="/papers",
    tags=["Paper Management"]
)


@router.get("/")
def all_papers(
    db: Session = Depends(get_db)
):

    return get_all_papers(db)


@router.get("/{paper_id}")
def paper_details(
    paper_id: int,
    db: Session = Depends(get_db)
):

    return get_paper(
        db,
        paper_id
    )


@router.get("/search/{keyword}")
def search_database(
    keyword: str,
    db: Session = Depends(get_db)
):

    return search_saved_papers(
        db,
        keyword
    )


@router.delete("/{paper_id}")
def remove_paper(
    paper_id: int,
    db: Session = Depends(get_db)
):

    success = delete_paper(
        db,
        paper_id
    )

    return {
        "deleted": success
    }