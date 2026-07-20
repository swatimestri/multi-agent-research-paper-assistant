from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db
from coordinator.coordinator_agent import run_research_pipeline

router = APIRouter(
    prefix="/research",
    tags=["Coordinator Agent"]
)


@router.post("/")
def research(
    query: str,
    db: Session = Depends(get_db)
):

    return run_research_pipeline(
        db,
        query
    )