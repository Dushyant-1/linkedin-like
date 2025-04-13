import React from 'react';
import { Typography, Paper, Container } from '@mui/material';

const Donations = () => {
    return (
        <Container>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Donations
                </Typography>
                <Typography variant="body1">
                    Make a donation to support our alumni network. This is a placeholder page.
                </Typography>
            </Paper>
        </Container>
    );
};

export default Donations; 