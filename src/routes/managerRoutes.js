const express = require('express');
const router = express.Router();
const { insertStaff } = require('../controllers/managerController');

module.exports = function(db) {
    // Route handlers
    router.post('/create-staff', insertStaff.bind(null, db));
    // router.post('/update-staff', updateStaff.bind(null, db));

    return router;
};
