# AI Canvas Mind Map

An AI-powered mind mapping application that helps you generate ideas and create visual mind maps with AI assistance.

## Project Structure

```
.
├── docker-compose.yml       # Docker Compose configuration
├── Dockerfile              # Frontend Dockerfile
├── index.html              # Frontend HTML file
├── backend/                # Backend Node.js/Express server
│   ├── Dockerfile          # Backend Dockerfile
│   ├── package.json        # Backend dependencies
│   └── server.js           # Express server with AI endpoints
└── README.md               # This file
```

## Prerequisites

- Docker & Docker Compose (recommended)
- Node.js 16+ and npm (for local development)
- Git

## Setup Steps

### Option 1: Using Docker Compose (Recommended)

1. **Clone the repository**
   ```bash
   git clone https://github.com/ytiwari41/ai-canvas-mindmap.git
   cd ai-canvas-mindmap
   ```

2. **Build and start services with Docker Compose**
   ```bash
   docker-compose up --build
   ```

3. **Access the application**
   - Frontend: http://localhost:8080
   - Backend API: http://localhost:3000

4. **Stop the services**
   ```bash
   docker-compose down
   ```

### Option 2: Local Development Setup (macOS without Docker)

#### Prerequisites for Local Setup
- Ollama installed locally (see Option 3 for Ollama setup)
- Node.js 16+ and npm
- macOS machine

#### Step 1: Install and Setup Ollama

1. **Install Ollama using Homebrew**
   ```bash
   brew install ollama
   ```

2. **Start Ollama server in the background**
   ```bash
   ollama serve &
   ```

3. **Pull AI Models** (choose one or both)

   Pull Llama 3 model:
   ```bash
   ollama pull llama3
   ```

   Or pull Mistral model (recommended for faster responses):
   ```bash
   ollama pull mistral
   ```

4. **Verify Ollama is running** by testing the API:
   ```bash
   curl http://localhost:11434/api/generate \
     -d '{"model":"mistral","prompt":"Give 3 DevOps ideas","stream":false}'
   ```

#### Step 2: Setup Backend Server

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install Node dependencies**
   ```bash
   npm install
   ```

3. **Start the backend server**
   ```bash
   npm start
   ```
   - Backend API server runs on http://localhost:3000

#### Step 3: Setup Frontend

1. **Open index.html in a new terminal**
   ```bash
   # Navigate to project root
   cd ..
   
   # Start a simple HTTP server
   python3 -m http.server 8000
   ```

2. **Access the application**
   - Open browser and go to http://localhost:8000
   - Frontend will connect to backend on http://localhost:3000

#### Step 4: Test Full Integration

1. **With Ollama, Backend, and Frontend running, test the API:**
   ```bash
   curl -X POST http://localhost:3000/ai/ideas \
     -H "Content-Type: application/json" \
     -d '{"topic":"Docker"}'
   ```

2. **Expected response:**
   ```json
   {
     "ideas": ["idea1", "idea2", "idea3", ...]
   }
   ```

#### Step 5: Cleanup

To stop all services:

1. **Stop Ollama server**
   ```bash
   pkill -f "ollama serve"
   ```

2. **Stop Backend** (press Ctrl+C in backend terminal)

3. **Stop Frontend HTTP server** (press Ctrl+C in frontend terminal)

**Important Notes for Local macOS Setup:**
- ✅ Ollama server runs on `http://localhost:11434`
- ✅ Backend API runs on `http://localhost:3000`
- ✅ Frontend runs on `http://localhost:8000`
- ✅ Make sure ports 3000, 8000, and 11434 are available

## Available Endpoints

### POST /ai/ideas
Generate AI-powered ideas for a given topic.

**Request:**
```json
{
  "topic": "your topic here"
}
```

**Response:**
```json
{
  "ideas": ["idea1", "idea2", "idea3", ...]
}
```

## Features

- 🧠 AI-powered idea generation
- 🎨 Visual mind map canvas
- 🚀 Fast and responsive UI
- 🐳 Docker support for easy deployment
- 🔌 RESTful API backend

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **Deployment**: Docker, Docker Compose
- **Server**: Nginx (for frontend), Express (for API)

## Development

### Running Backend Tests
```bash
cd backend
npm test
```

### Debugging Backend
```bash
cd backend
npm run dev
```

## API CORS Policy

The backend accepts requests from all origins and supports:
- `POST` and `GET` requests
- `Content-Type: application/json`
- CORS preflight requests

## Deployment

### Using Docker Compose
```bash
docker-compose up -d
```

### Manual Docker Build
```bash
# Build backend
docker build -t ai-mindmap-backend ./backend

# Build frontend
docker build -t ai-mindmap-frontend .

# Run containers
docker run -p 3000:3000 ai-mindmap-backend
docker run -p 8080:80 ai-mindmap-frontend
```

## Troubleshooting

**Port already in use:**
- Change ports in `docker-compose.yml` or kill existing services

**Backend connection errors:**
- Ensure backend is running on `http://localhost:3000`
- Check CORS headers in `server.js`

**Docker issues:**
- Rebuild images: `docker-compose down && docker-compose up --build`

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add your feature"`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For issues and questions, please open an issue on [GitHub](https://github.com/ytiwari41/ai-canvas-mindmap/issues).
