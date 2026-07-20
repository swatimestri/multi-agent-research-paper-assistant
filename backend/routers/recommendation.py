from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db
from services.recommendation_service import get_recommendations

router = APIRouter(
    prefix="/recommendation",
    tags=["Recommendation Agent"]
)


@router.get("/")
def recommendations(
    db: Session = Depends(get_db)
):
    return get_recommendations(db)