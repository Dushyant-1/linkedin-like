# Alumni Portal - Complete Setup Guide

## Table of Contents
1. [Project Overview](#project-overview)
2. [System Requirements](#system-requirements)
3. [Initial Setup](#initial-setup)
4. [Backend Setup](#backend-setup)
5. [Frontend Setup](#frontend-setup)
6. [Database Setup](#database-setup)
7. [Running the Application](#running-the-application)
8. [Troubleshooting](#troubleshooting)
9. [Development Guidelines](#development-guidelines)

## Project Overview

This is a full-stack Alumni Portal application that allows alumni to connect, share experiences, and stay updated with their alma mater. The project consists of:

- Frontend: React.js with Material-UI
- Backend: Node.js with Express
- Database: MongoDB

## System Requirements

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (v4.4 or higher)
- Git
- Code Editor (VS Code recommended)

## Initial Setup

1. Clone the repository:
```bash
git clone https://github.com/Dushyant-1/Final-project.git
cd alumni-portal
```

2. Create the following directory structure:
```
alumni-portal/
├── frontend-new/     # React frontend
└── backend/          # Node.js backend
```

## Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/alumni-portal
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

4. Start MongoDB service:
```bash
# Windows
net start MongoDB

# Linux/Mac
sudo service mongod start
```

5. Seed the database (optional):
```bash
node seed.js
```

## Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend-new
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory:
```env
REACT_APP_API_URL=http://localhost:5000
FAST_REFRESH=false
```

## Running the Application

1. Start the backend server:
```bash
# From the backend directory
npm start
```
The backend will run on http://localhost:5000

2. Start the frontend development server:
```bash
# From the frontend directory
npm start
```
The frontend will run on http://localhost:3000

3. Access the application:
- Open http://localhost:3000 in your browser
- The frontend will automatically connect to the backend

## Development Guidelines

### Code Structure
- Follow the existing project structure
- Create new components in appropriate directories
- Use meaningful variable and function names
- Add comments for complex logic

### Git Workflow
1. Create a new branch for your feature:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit:
```bash
git add .
git commit -m "feat: description of your changes"
```

3. Push your changes:
```bash
git push origin feature/your-feature-name
```

4. Create a Pull Request on GitHub

### API Development
- Document all new API endpoints
- Use proper HTTP methods (GET, POST, PUT, DELETE)
- Implement error handling
- Add input validation

### Frontend Development
- Use Material-UI components
- Follow the existing styling patterns
- Implement responsive design
- Add loading states and error handling

## Troubleshooting

### Common Issues

1. **Backend Connection Issues**
   - Check if MongoDB is running
   - Verify the MONGODB_URI in .env
   - Ensure the backend server is running

2. **Frontend Build Issues**
   - Clear node_modules and reinstall:
     ```bash
     rm -rf node_modules
     npm install
     ```
   - Check for version conflicts in package.json

3. **API Connection Errors**
   - Verify REACT_APP_API_URL in frontend .env
   - Check CORS settings in backend
   - Ensure both servers are running

4. **Database Connection Problems**
   - Verify MongoDB service is running
   - Check connection string in backend .env
   - Ensure proper database permissions

### Debugging Tips

1. **Backend Debugging**
   - Use console.log() for basic debugging
   - Check server logs for errors
   - Use Postman to test API endpoints

2. **Frontend Debugging**
   - Use React Developer Tools
   - Check browser console for errors
   - Use Network tab to monitor API calls

## Support

For any issues or questions:
1. Check the existing documentation
2. Search for similar issues in the repository
3. Contact the team lead
4. Create a new issue on GitHub

## Additional Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Material-UI Documentation](https://mui.com/material-ui/getting-started/overview/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/) 
