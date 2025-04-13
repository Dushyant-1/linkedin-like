import React from 'react';
import { Typography, Paper, Container } from '@mui/material';

const Profile = () => {
    return (
        <Container>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Profile
                </Typography>
                <Typography variant="body1">
                    View and edit your profile information. This is a placeholder page.
                </Typography>
            </Paper>
        </Container>
    );
};

export default Profile; 