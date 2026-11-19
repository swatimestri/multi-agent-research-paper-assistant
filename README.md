🔬 ResearchMind AI
ResearchMind AI is an AI-powered research paper assistant designed to help students and researchers search, understand, compare, and analyze academic research papers more efficiently.

The system searches research papers from arXiv using the arXiv API, generates AI-powered summaries, identifies research gaps, analyzes research trends, and provides topic recommendations. Authenticated users can also maintain a personal search history and save papers to their research library.

---

✨ Features
🔎 Research Paper Search
Search research papers by topic or keyword.
Retrieves papers directly from the arXiv API.
Displays paper title, authors, publication year, abstract, and arXiv link.
🤖 AI-Powered Paper Summarization
Generates concise summaries of research paper abstracts.
Helps users understand papers without reading the entire abstract first.
Uses Google Gemini for AI processing.
📊 Research Gap Analysis
Analyzes the retrieved papers and provides:

Current Research – what the existing papers focus on.
Research Gap – areas that appear insufficiently explored.
Future Scope – possible directions for further research.
📈 Research Trend Analysis
Analyzes publication-year information from the retrieved papers.
Presents research trends visually.
💡 Topic Recommendations
Suggests related research topics based on the papers retrieved for a query.
📚 Search History
Authenticated users can:

View previous searches.
Search a previous query again.
Delete individual history entries.
Clear their search history.
🔐 Authentication
User registration and login.
JWT-based authentication.
Protected research and history endpoints.
Guest access is also supported for features that do not require an account.
💾 Research Library
Authenticated users can save papers and manage their saved research papers.

🎬 Interactive Demo
The landing page includes an interactive demo that visually demonstrates the research workflow:

Searching arXiv papers
Finding research papers
Generating AI summaries
Comparing papers
Analyzing research trends
Detecting research gaps
Saving papers to the research library
---

🏗️ System Architecture
                    ┌─────────────────────────┐
                    │       React Frontend    │
                    │       (Vite)            │
                    └────────────┬────────────┘
                                 │ HTTP / REST
                                 ▼
                    ┌─────────────────────────┐
                    │      FastAPI Backend    │
                    └────────────┬────────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                  │
              ▼                  ▼                  ▼
       ┌─────────────┐    ┌──────────────┐   ┌──────────────┐
       │   arXiv API │    │ Google Gemini│   │ PostgreSQL   │
       │             │    │     API      │   │  Database    │
       └─────────────┘    └──────────────┘   └──────────────┘
              │                  │                  │
              ▼                  ▼                  ▼
        Research Papers      AI Analysis      Users / History /
        \\\& Metadata           \\\& Summaries      Saved Papers
---

🛠️ Technologies Used
Frontend
React.js
Vite
JavaScript
HTML5
CSS3
Backend
Python
FastAPI
SQLAlchemy
JWT Authentication
Uvicorn
AI / APIs
Google Gemini API
arXiv API
Database
PostgreSQL
Development Tools
Visual Studio Code
Postman for API testing
Git & GitHub
---

📁 Project Structure
ResearchMind-AI/
│
├── backend/
│   ├── agents/
│   │   ├── summarizer\\\_agent.py
│   │   └── research\\\_gap\\\_agent.py
│   │
│   ├── auth/
│   │   ├── auth\\\_bearer.py
│   │   ├── jwt\\\_handler.py
│   │   └── ...
│   │
│   ├── coordinator/
│   │   ├── coordinator.py
│   │   └── coordinator\\\_agent.py
│   │
│   ├── database/
│   │   └── database.py
│   │
│   ├── models/
│   │   ├── user.py
│   │   ├── paper.py
│   │   ├── saved\\\_paper.py
│   │   └── history.py
│   │
│   ├── services/
│   │   ├── search\\\_service.py
│   │   ├── history\\\_service.py
│   │   ├── research\\\_gap\\\_service.py
│   │   ├── recommendation\\\_service.py
│   │   └── trend\\\_service.py
│   │
│   ├── utils/
│   │   └── llm.py
│   │
│   └── main.py
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── ...
│   └── package.json
│
└── README.md
The exact folder structure may vary slightly depending on the current project version.

---

🔄 How ResearchMind AI Works
When a user searches for a topic:

User enters research topic
          ↓
FastAPI receives the request
          ↓
Coordinator Agent starts the research pipeline
          ↓
arXiv API searches for relevant papers
          ↓
Retrieved papers are processed
          ↓
Google Gemini generates summaries
          ↓
 ┌────────┬──────────────┬───────────────┐
 ↓        ↓              ↓
Topics   Research       Research
        Gap Analysis     Trends
 └────────┴──────────────┴───────────────┘
          ↓
Results returned to React frontend
          ↓
User views research insights
---

🔌 API Endpoints
Some of the main backend endpoints include:

Method	Endpoint	Purpose
POST	/auth/login	User login
POST	/auth/register	User registration
POST	/research/	Search and analyze research papers
GET	/history/	Get logged-in user's search history
DELETE	/history/	Clear search history
DELETE	/history/{history\\\_id}	Delete one history entry
GET	/docs	FastAPI Swagger API documentation
The exact endpoints may depend on the current backend configuration.

---

⚙️ Installation
1. Clone the repository
git clone https://github.com/Dhanashri_katwe/ResearchMind-AI.git
cd ResearchMind-AI
2. Backend setup
Create and activate a virtual environment:

cd backend

python -m venv venv
Windows:

venv\\\\Scripts\\\\activate
Install dependencies:

pip install -r requirements.txt
3. Configure environment variables
Create a .env file inside the backend directory.

Example:

GEMINI\\\_API\\\_KEY=your\\\_gemini\\\_api\\\_key

DATABASE\\\_URL=your\\\_postgresql\\\_database\\\_url

SECRET\\\_KEY=your\\\_secret\\\_key
Do not upload .env to GitHub.

Add it to .gitignore:

.env
venv/
\\\_\\\_pycache\\\_\\\_/
\\\*.pyc
4. Configure PostgreSQL
Create a PostgreSQL database for the project and update the database configuration/environment variables according to your local setup.

The application uses SQLAlchemy to communicate with PostgreSQL.

5. Start the backend
From the backend directory:

uvicorn main:app --reload --port 8000
Backend:

http://127.0.0.1:8000
Swagger API documentation:

http://127.0.0.1:8000/docs
6. Start the frontend
Open another terminal:

cd frontend
npm install
npm run dev
The Vite development server will display the local frontend URL in the terminal, commonly:

http://localhost:5173
---

🔑 Environment Variables
Variable	Description
GEMINI\\\_API\\\_KEY	API key used for Gemini AI features
DATABASE\\\_URL	PostgreSQL connection string
SECRET\\\_KEY	Secret used for JWT authentication
Never commit real API keys, passwords, database credentials, or JWT secrets to GitHub.

---

🧪 Testing APIs
The FastAPI Swagger interface can be used to test backend endpoints:

http://127.0.0.1:8000/docs
Postman can also be used to send and test REST API requests.

---

🧠 AI Pipeline
ResearchMind AI uses a coordinator-based workflow.

The coordinator connects the major research services:

Coordinator Agent
      │
      ├── Search Service
      │       └── arXiv API
      │
      ├── Summarizer Agent
      │       └── Google Gemini
      │
      ├── Recommendation Service
      │
      ├── Research Gap Service
      │       └── Research Gap Agent
      │               └── Google Gemini
      │
      └── Trend Service
This design keeps individual responsibilities separated into services and agents.

---

🌐 Data Source
Research papers are retrieved from arXiv through its API.

ResearchMind AI does not use a downloaded arXiv dataset as its primary paper-search source. When a user searches for a topic, the backend sends a query to the arXiv API and processes the returned paper metadata and abstracts.

---

🚧 Current Limitations
arXiv may temporarily reject requests when its API rate limit is reached.
AI-generated summaries and research-gap analysis depend on the availability of the Gemini API.
Search results depend on the papers returned by arXiv for the requested query.
AI-generated research gaps should be treated as research assistance rather than a substitute for a systematic literature review.
---

🔮 Future Enhancements
Possible future improvements include:

Semantic/vector-based paper search
Citation network analysis
More advanced paper comparison
PDF full-text analysis
Citation formatting
Novelty analysis
Improved research-gap detection
More academic data sources
User-specific research recommendations
Cloud deployment
Advanced researcher dashboards
---

👩‍💻 Project Purpose
ResearchMind AI was developed as an academic/project solution to demonstrate how Artificial Intelligence, Natural Language Processing, APIs, web technologies, authentication, and database systems can be combined to create a practical research-assistance platform.

The goal is to reduce the time required to discover and understand research literature and provide researchers with useful AI-assisted insights.

---

📜 Disclaimer
ResearchMind AI provides AI-assisted research information. AI-generated summaries, recommendations, trends, and research-gap analysis may contain inaccuracies and should be verified against the original research papers.

---

⭐ If You Find This Project Useful
Give the repository a ⭐ on GitHub and feel free to explore, improve, and extend the project.# ResearchMind-AI

A research assistant application with a React frontend and a FastAPI backend.

## Project structure

- `backend/` - FastAPI backend server
- `frontend/` - React + Vite frontend application

## Prerequisites

- Python 3.11+ (or the latest installed Python version)
- Node.js 18+ and npm

## Backend setup

1. Open a terminal and navigate to `backend`:
   ```powershell
   cd c:\Users\HP\Downloads\ResearchMind-AI\backend
   ```
2. Create a virtual environment:
   ```powershell
   python -m venv .\venv
   ```
3. Activate the virtual environment:
   ```powershell
   .\venv\Scripts\Activate
   ```
4. Install backend dependencies:
   ```powershell
   python -m pip install -r requirements.txt
   ```
5. Start the backend server:
   ```powershell
   python -m uvicorn main:app --reload --host 127.0.0.1 --port 8000
   ```

The backend will be available at `http://127.0.0.1:8000`.

Optional API documentation:

- `http://127.0.0.1:8000/docs`
- `http://127.0.0.1:8000/redoc`

## Frontend setup

1. Open another terminal and navigate to `frontend`:
   ```powershell
   cd c:\Users\HP\Downloads\ResearchMind-AI\frontend
   ```
2. Install frontend dependencies:
   ```powershell
   npm install
   ```
3. Start the frontend development server:
   ```powershell
   npm run dev
   ```

The frontend will typically run at `http://localhost:5173`.

## Running both servers

1. Start the backend first.
2. Start the frontend second.
3. Open the frontend URL in your browser.

## Notes

- If `python` is not available, use `py` instead:
  ```powershell
  py -m venv .\venv
  py -m pip install -r requirements.txt
  py -m uvicorn main:app --reload --host 127.0.0.1 --port 8000
  ```
- Make sure the backend is running before using the frontend.
- The frontend is configured to allow requests from `http://localhost:5173`.

## Troubleshooting

- If `npm install` fails, ensure Node.js and npm are installed correctly.
- If the backend fails to start, verify the virtual environment is activated and dependencies installed.
- If CORS errors appear, confirm the frontend URL matches the backend's allowed origins.
