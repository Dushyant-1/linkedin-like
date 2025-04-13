const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Donation = require('../models/Donation');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require('../models/User');

// @route   GET api/donations
// @desc    Get all donations
// @access  Private (Admin)
router.get('/', auth, async (req, res) => {
    try {
        // Check if user is admin
        const user = await User.findById(req.user.id);
        if (user.role !== 'admin') {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        const donations = await Donation.find()
            .populate('donor', 'firstName lastName email')
            .sort({ createdAt: -1 });
        res.json(donations);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/donations
// @desc    Create a donation
// @access  Private
router.post('/', auth, async (req, res) => {
    try {
        const { amount, paymentMethod, message, isAnonymous } = req.body;

        // Create Stripe payment intent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Convert to cents
            currency: 'usd',
            payment_method: paymentMethod,
            confirm: true,
        });

        // Create donation record
        const newDonation = new Donation({
            donor: req.user.id,
            amount,
            paymentMethod,
            status: 'Completed',
            transactionId: paymentIntent.id,
            message,
            isAnonymous
        });

        const donation = await newDonation.save();
        res.json(donation);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/donations/user
// @desc    Get user's donations
// @access  Private
router.get('/user', auth, async (req, res) => {
    try {
        const donations = await Donation.find({ donor: req.user.id })
            .sort({ createdAt: -1 });
        res.json(donations);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/donations/:id
// @desc    Get donation by ID
// @access  Private
router.get('/:id', auth, async (req, res) => {
    try {
        const donation = await Donation.findById(req.params.id)
            .populate('donor', 'firstName lastName email');

        if (!donation) {
            return res.status(404).json({ msg: 'Donation not found' });
        }

        // Check if user is admin or the donor
        const user = await User.findById(req.user.id);
        if (user.role !== 'admin' && donation.donor.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        res.json(donation);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Donation not found' });
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router; 