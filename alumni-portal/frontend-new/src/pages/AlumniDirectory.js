import React, { useState } from 'react';
import {
    Typography,
    Paper,
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Avatar,
    Chip,
    TextField,
    InputAdornment,
    Box
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const dummyAlumni = [
    {
        id: 1,
        name: 'John Doe',
        batch: 'Computer Science',
        graduationYear: 2015,
        currentPosition: 'Senior Software Engineer',
        company: 'Tech Corp',
        email: 'john.doe@example.com',
        linkedin: 'https://linkedin.com/in/johndoe'
    },
    {
        id: 2,
        name: 'Jane Smith',
        batch: 'Electrical Engineering',
        graduationYear: 2018,
        currentPosition: 'Project Manager',
        company: 'Engineering Solutions',
        email: 'jane.smith@example.com',
        linkedin: 'https://linkedin.com/in/janesmith'
    },
    {
        id: 3,
        name: 'Mike Johnson',
        batch: 'Mechanical Engineering',
        graduationYear: 2017,
        currentPosition: 'Product Designer',
        company: 'Design Innovations',
        email: 'mike.johnson@example.com',
        linkedin: 'https://linkedin.com/in/mikejohnson'
    },
    {
        id: 4,
        name: 'Sarah Williams',
        batch: 'Computer Science',
        graduationYear: 2019,
        currentPosition: 'Data Scientist',
        company: 'AI Solutions',
        email: 'sarah.williams@example.com',
        linkedin: 'https://linkedin.com/in/sarahwilliams'
    },
    {
        id: 5,
        name: 'David Brown',
        batch: 'Civil Engineering',
        graduationYear: 2016,
        currentPosition: 'Construction Manager',
        company: 'BuildRight Inc',
        email: 'david.brown@example.com',
        linkedin: 'https://linkedin.com/in/davidbrown'
    }
];

const AlumniDirectory = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredAlumni = dummyAlumni.filter(alumni => 
        alumni.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container maxWidth="lg" style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Alumni Directory
            </Typography>
            <Typography variant="body1" paragraph>
                Connect with fellow alumni from your batch and other departments.
            </Typography>

            <TextField
                fullWidth
                variant="outlined"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ mb: 3 }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            
            <TableContainer component={Paper} elevation={3}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Alumni</TableCell>
                            <TableCell>Batch</TableCell>
                            <TableCell>Graduation Year</TableCell>
                            <TableCell>Current Position</TableCell>
                            <TableCell>Company</TableCell>
                            <TableCell>Contact</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredAlumni.map((alumni) => (
                            <TableRow key={alumni.id}>
                                <TableCell>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Avatar 
                                            sx={{ width: 40, height: 40, marginRight: 2 }}
                                            alt={alumni.name}
                                        />
                                        <div>
                                            <Typography variant="subtitle1">{alumni.name}</Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {alumni.email}
                                            </Typography>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Chip 
                                        label={alumni.batch} 
                                        color="primary" 
                                        variant="outlined"
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>{alumni.graduationYear}</TableCell>
                                <TableCell>{alumni.currentPosition}</TableCell>
                                <TableCell>{alumni.company}</TableCell>
                                <TableCell>
                                    <a 
                                        href={alumni.linkedin} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Chip 
                                            label="LinkedIn" 
                                            color="primary" 
                                            size="small"
                                        />
                                    </a>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default AlumniDirectory; 