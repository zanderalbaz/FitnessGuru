const express = require('express');
const router = express.Router();
const { createMember } = require('../controllers/memberController');

module.exports = function(db) {
    // Route handlers
    router.post('/create-member', createMember.bind(null, db));

    return router;
};
