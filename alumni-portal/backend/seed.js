const mongoose = require('mongoose');
const User = require('./models/User');
const Job = require('./models/Job');
const Event = require('./models/Event');
const Donation = require('./models/Donation');
const bcrypt = require('bcryptjs');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/alumni-portal', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB for seeding'))
.catch(err => console.error('MongoDB connection error:', err));

// Function to create dummy users
const createDummyUsers = async () => {
    const users = [
        {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            password: 'password123',
            role: 'admin',
            batch: 'Computer Science',
            graduationYear: 2015,
            currentPosition: 'Senior Software Engineer',
            company: 'Tech Corp',
            contactNumber: '+1234567890',
            linkedinProfile: 'https://linkedin.com/in/johndoe'
        },
        {
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane.smith@example.com',
            password: 'password123',
            role: 'alumni',
            batch: 'Electrical Engineering',
            graduationYear: 2018,
            currentPosition: 'Project Manager',
            company: 'Engineering Solutions',
            contactNumber: '+0987654321',
            linkedinProfile: 'https://linkedin.com/in/janesmith'
        },
        {
            firstName: 'Mike',
            lastName: 'Johnson',
            email: 'mike.johnson@example.com',
            password: 'password123',
            role: 'alumni',
            batch: 'Mechanical Engineering',
            graduationYear: 2017,
            currentPosition: 'Product Designer',
            company: 'Design Innovations',
            contactNumber: '+1122334455',
            linkedinProfile: 'https://linkedin.com/in/mikejohnson'
        }
    ];

    // Hash passwords before saving
    for (let user of users) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    }

    await User.insertMany(users);
    console.log('Dummy users created');
    return await User.find();
};

// Function to create dummy jobs
const createDummyJobs = async (users) => {
    const jobs = [
        {
            title: 'Senior Software Developer',
            company: 'Tech Solutions Inc.',
            description: 'Looking for an experienced software developer to join our team.',
            requirements: ['5+ years of experience', 'JavaScript', 'React', 'Node.js'],
            location: 'New York, NY',
            type: 'Full-time',
            postedBy: users[0]._id,
            postedByName: `${users[0].firstName} ${users[0].lastName}`
        },
        {
            title: 'Project Manager',
            company: 'Engineering Corp',
            description: 'Seeking a project manager with experience in engineering projects.',
            requirements: ['PMP Certification', '5+ years experience', 'Team management'],
            location: 'San Francisco, CA',
            type: 'Full-time',
            postedBy: users[1]._id,
            postedByName: `${users[1].firstName} ${users[1].lastName}`
        },
        {
            title: 'Product Designer',
            company: 'Design Studio',
            description: 'Join our creative team as a product designer.',
            requirements: ['3+ years experience', 'UI/UX design', 'Figma', 'Adobe Creative Suite'],
            location: 'Remote',
            type: 'Contract',
            postedBy: users[2]._id,
            postedByName: `${users[2].firstName} ${users[2].lastName}`
        }
    ];

    await Job.insertMany(jobs);
    console.log('Dummy jobs created');
};

// Function to create dummy events
const createDummyEvents = async (users) => {
    const events = [
        {
            title: 'Annual Alumni Meet',
            description: 'Join us for our annual alumni meet and networking event.',
            date: new Date('2024-06-15'),
            location: 'University Campus',
            organizer: users[0]._id,
            maxAttendees: 100
        },
        {
            title: 'Career Development Workshop',
            description: 'Workshop on career development and job search strategies.',
            date: new Date('2024-07-20'),
            location: 'Online',
            organizer: users[1]._id,
            maxAttendees: 50
        },
        {
            title: 'Tech Talk: Future of AI',
            description: 'Expert panel discussion on the future of artificial intelligence.',
            date: new Date('2024-08-10'),
            location: 'Tech Hub Center',
            organizer: users[2]._id,
            maxAttendees: 75
        }
    ];

    await Event.insertMany(events);
    console.log('Dummy events created');
};

// Function to create dummy donations
const createDummyDonations = async (users) => {
    const donations = [
        {
            donor: users[0]._id,
            amount: 1000,
            paymentMethod: 'Credit Card',
            status: 'Completed',
            transactionId: 'txn_123456',
            message: 'Supporting our alma mater',
            isAnonymous: false
        },
        {
            donor: users[1]._id,
            amount: 500,
            paymentMethod: 'PayPal',
            status: 'Completed',
            transactionId: 'txn_789012',
            message: 'Happy to contribute',
            isAnonymous: true
        },
        {
            donor: users[2]._id,
            amount: 750,
            paymentMethod: 'Bank Transfer',
            status: 'Completed',
            transactionId: 'txn_345678',
            message: 'For student scholarships',
            isAnonymous: false
        }
    ];

    await Donation.insertMany(donations);
    console.log('Dummy donations created');
};

// Main function to seed all data
const seedDatabase = async () => {
    try {
        // Clear existing data
        await User.deleteMany({});
        await Job.deleteMany({});
        await Event.deleteMany({});
        await Donation.deleteMany({});
        console.log('Cleared existing data');

        // Create new data
        const users = await createDummyUsers();
        await createDummyJobs(users);
        await createDummyEvents(users);
        await createDummyDonations(users);

        console.log('Database seeded successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

// Run the seed function
seedDatabase(); 