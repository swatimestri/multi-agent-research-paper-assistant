from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db
from services.research_gap_service import analyze_gap

router = APIRouter(
    prefix="/research-gap",
    tags=["Research Gap Agent"]
)


@router.get("/")
def research_gap(
    db: Session = Depends(get_db)
):
    return analyze_gap(db)