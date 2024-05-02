const express = require('express');
const router = express.Router();
const { getMembers, updateMembership, completeCourse } = require('../controllers/staffController');

module.exports = function(db) {
    // Route handlers
    router.get('/get-members', getMembers.bind(null, db));
    router.post('/update-membership', updateMembership.bind(null, db));
    router.post('/complete-course', completeCourse.bind(null, db));
    return router;
};
