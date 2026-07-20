from fastapi import APIRouter, Depends

from auth.auth_bearer import get_current_user

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/")
def dashboard(user=Depends(get_current_user)):

    return {
        "message": "Welcome to ResearchMind AI Dashboard",
        "user": user
    }