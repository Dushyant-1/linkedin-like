import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import {
  People as PeopleIcon,
  Work as WorkIcon,
  Event as EventIcon,
  School as SchoolIcon,
} from '@mui/icons-material';

const features = [
  {
    title: 'Alumni Directory',
    description: 'Connect with fellow alumni and expand your professional network.',
    icon: <PeopleIcon fontSize="large" />,
    path: '/alumni',
  },
  {
    title: 'Job Portal',
    description: 'Find job opportunities and post openings for fellow alumni.',
    icon: <WorkIcon fontSize="large" />,
    path: '/jobs',
  },
  {
    title: 'Events',
    description: 'Stay updated with upcoming alumni events and reunions.',
    icon: <EventIcon fontSize="large" />,
    path: '/events',
  },
  {
    title: 'Success Stories',
    description: 'Read inspiring stories from successful alumni.',
    icon: <SchoolIcon fontSize="large" />,
    path: '/success-stories',
  },
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Alumni Portal
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Connect, Network, and Grow Together
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={RouterLink}
              to="/register"
              sx={{ mr: 2 }}
            >
              Join Now
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              component={RouterLink}
              to="/login"
            >
              Sign In
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {features.map((feature) => (
            <Grid item xs={12} sm={6} md={3} key={feature.title}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ mb: 2, color: 'primary.main' }}>
                    {feature.icon}
                  </Box>
                  <Typography gutterBottom variant="h5" component="h3">
                    {feature.title}
                  </Typography>
                  <Typography>{feature.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    component={RouterLink}
                    to={feature.path}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box
        sx={{
          bgcolor: 'grey.100',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom>
            Ready to Join Our Community?
          </Typography>
          <Typography variant="body1" paragraph>
            Connect with your fellow alumni, share experiences, and create new opportunities together.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={RouterLink}
            to="/register"
          >
            Get Started
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 