# Alumni Portal - Frontend

A modern web application for managing alumni connections, built with React and Material-UI.

## Features

- User authentication (Login/Register)
- Alumni Directory with search functionality
- Profile Management
- Events Management
- Job Postings
- Success Stories
- Admin Dashboard
- Responsive Design

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Dushyant-1/Final-project.git
cd alumni-portal/frontend-new
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
REACT_APP_API_URL=http://localhost:5000
FAST_REFRESH=false
```

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
src/
├── api/              # API configuration and services
├── components/       # Reusable UI components
│   ├── layout/      # Layout components (Navbar, Footer)
│   └── common/      # Shared components
├── pages/           # Page components
├── context/         # React context providers
├── hooks/           # Custom React hooks
├── utils/           # Utility functions
└── assets/          # Static assets (images, fonts)
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App

## Dependencies

- React
- Material-UI
- Axios
- Formik
- Yup
- React Router DOM

## Backend Integration

This frontend application is designed to work with the Alumni Portal backend. Ensure the backend server is running at the URL specified in your `.env` file.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| REACT_APP_API_URL | Backend API URL | http://localhost:5000 |
| FAST_REFRESH | Enable/disable fast refresh | false |

## Common Issues

1. **Port already in use**
   - Solution: Change the port in `.env` or kill the process using the port

2. **API connection issues**
   - Ensure the backend server is running
   - Check the `REACT_APP_API_URL` in `.env`

3. **Dependency conflicts**
   - Delete `node_modules` and `package-lock.json`
   - Run `npm install` again

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email [your-email@example.com] or create an issue in the repository.
