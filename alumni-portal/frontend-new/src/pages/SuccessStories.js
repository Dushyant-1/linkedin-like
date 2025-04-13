import React from 'react';
import { Typography, Paper, Container } from '@mui/material';

const SuccessStories = () => {
    return (
        <Container>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Success Stories
                </Typography>
                <Typography variant="body1">
                    Read inspiring stories from our alumni. This is a placeholder page.
                </Typography>
            </Paper>
        </Container>
    );
};

export default SuccessStories; 