from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database.database import get_db
from services.comparison_service import compare

router = APIRouter(
    prefix="/compare",
    tags=["Paper Comparison"]
)


@router.get("/{paper1}/{paper2}")
def compare_route(
    paper1: int,
    paper2: int,
    db: Session = Depends(get_db)
):

    result = compare(db, paper1, paper2)

    if result is None:
        raise HTTPException(
            status_code=404,
            detail="Paper not found"
        )

    return result