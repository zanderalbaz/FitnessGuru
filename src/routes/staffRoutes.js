const express = require('express');
const router = express.Router();
const { updateMembership } = require('../controllers/staffController');

module.exports = function(db) {
    // Route handlers
    router.post('/find-member', updateMembership.bind(null, db));
    router.post('/update-membership', updateMembership.bind(null, db));
    router.post('/complete-course', completeCourse.bind(null, db));
    return router;
};
