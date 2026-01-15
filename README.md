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

### Option 2: Local Development Setup

#### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the backend server**
   ```bash
   npm start
   ```
   - Server runs on http://localhost:3000

#### Frontend Setup

1. **Open index.html in a web browser**
   - Simply open `index.html` in your default browser
   - Or use a local server like `python -m http.server 8000`

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
