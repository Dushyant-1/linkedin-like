import React from 'react';
import { Typography, Paper, Container } from '@mui/material';

const AdminDashboard = () => {
    return (
        <Container>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Admin Dashboard
                </Typography>
                <Typography variant="body1">
                    Manage the alumni portal. This is a placeholder page.
                </Typography>
            </Paper>
        </Container>
    );
};

export default AdminDashboard; 