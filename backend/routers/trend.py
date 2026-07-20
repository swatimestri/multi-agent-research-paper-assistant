from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db
from services.trend_service import get_trends

router = APIRouter(
    prefix="/trend",
    tags=["Trend Analysis Agent"]
)


@router.get("/")
def trend(db: Session = Depends(get_db)):
    return get_trends(db)