from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database.database import Base, engine

# Import models BEFORE create_all()
from models.user import User

from routers.auth import router as auth_router
from routers.dashboard import router as dashboard_router
from routers.search import router as search_router

Base.metadata.create_all(bind=engine)
from database.database import Base, engine

Base.metadata.create_all(bind=engine)
from routers.paper import router as paper_router
from routers.summarizer import router as summarizer_router
from routers.comparison import router as comparison_router
from routers.research_gap import router as research_gap_router
from routers.trend import router as trend_router
from routers.recommendation import router as recommendation_router
from routers.coordinator import router as coordinator_router

app = FastAPI(
    title="ResearchMind AI",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)

@app.get("/")
def home():
    return {
        "message": "ResearchMind AI Backend Running 🚀"
    }

app.include_router(auth_router)
app.include_router(dashboard_router)
app.include_router(search_router)
app.include_router(paper_router)
app.include_router(summarizer_router)
app.include_router(comparison_router)
app.include_router(research_gap_router)
app.include_router(trend_router)
app.include_router(recommendation_router)
app.include_router(coordinator_router)