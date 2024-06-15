const express = require('express');
const Astrologer = require('./Astrologer');
const FlowDistributor = require('./FlowDistributor');
const User = require('./User');
const authenticate = require('./auth');

const router = express.Router();

const astrologers = [
    new Astrologer(1, 'Astrologer 1', true),
    new Astrologer(2, 'Astrologer 2'),
    new Astrologer(3, 'Astrologer 3')
];

const distributor = new FlowDistributor(astrologers);

// Connect user to astrologer
router.post('/connect', authenticate, (req, res) => {
    const user = new User(req.body.id, req.body.name);
    const astrologer = distributor.distribute(user);
    res.json({ user, astrologer });
});

// Adjust flow for top astrologers
router.post('/adjust-flow', authenticate, (req, res) => {
    const { astrologerId, makeTop } = req.body;
    distributor.adjustFlow(astrologerId, makeTop);
    res.send('Flow adjusted');
});

module.exports = router;
