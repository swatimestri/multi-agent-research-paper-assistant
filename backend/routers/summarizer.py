from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db
from services.summarizer_service import summarize_paper

router = APIRouter(
    prefix="/summary",
    tags=["AI Summary"]
)


@router.get("/{paper_id}")
def generate_summary(
    paper_id: int,
    db: Session = Depends(get_db)
):

    result = summarize_paper(
        db,
        paper_id
    )

    if result is None:

        return {
            "message": "Paper not found"
        }

    return result