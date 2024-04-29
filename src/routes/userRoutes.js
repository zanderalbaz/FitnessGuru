const express = require('express');
const router = express.Router();
const { login } = require('../controllers/userController');

module.exports = function(db) {
    router.post('/login', login.bind(null, db));
    return router;
};
