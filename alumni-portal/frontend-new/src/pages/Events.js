import React from 'react';
import { Typography, Paper, Container } from '@mui/material';

const Events = () => {
    return (
        <Container>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Events
                </Typography>
                <Typography variant="body1">
                    View upcoming and past events. This is a placeholder page.
                </Typography>
            </Paper>
        </Container>
    );
};

export default Events; 