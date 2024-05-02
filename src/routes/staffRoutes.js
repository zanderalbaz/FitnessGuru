const express = require('express');
const router = express.Router();
const { getMembers, updateMembershipType, completeCourse } = require('../controllers/staffController');

module.exports = function(db) {
    // Route handlers
    router.get('/get-members', getMembers.bind(null, db));
    router.put('/update-member/:id', updateMembershipType.bind(null, db));
    // router.post('/complete-course', completeCourse.bind(null, db));
    return router;
};
