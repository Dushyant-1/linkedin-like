import React from 'react';
import { Typography, Paper, Container } from '@mui/material';

const Dashboard = () => {
    return (
        <Container>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Typography variant="body1">
                    Welcome to your dashboard. This is a placeholder page.
                </Typography>
            </Paper>
        </Container>
    );
};

export default Dashboard; 