# ResearchMind-AI

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
