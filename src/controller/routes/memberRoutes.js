const express = require('express');
const router = express.Router();

module.exports = function(db) {
    // Route handlers
    router.post('/create-member', createMember.bind(null, db));

    return router;
};

function createMember(db, req, res) {
    const { username, password, email, location } = req.body;

    checkUserExists(db, username) 
        .then(() => checkLocationExists(db, location))
        .then((locationId) => insertNewUser(db, username, password, email, locationId))
        .then(() => res.status(201).json({ message: 'Member created successfully' }))
        .catch((err) => {
            console.error('Error creating member:', err);
            let statusCode = 500;
            let errorMessage = 'Internal Server Error';

            if (err === 'User already exists') {
                statusCode = 409; // Conflict
                errorMessage = 'User already exists';
            } else if (err === 'Location does not exist') {
                statusCode = 404; // Not Found
                errorMessage = 'Location does not exist';
            }

            res.status(statusCode).json({ error: errorMessage });
        });
}

function checkLocationExists(db, location) {
    return new Promise((resolve, reject) => {
        const locationQuery = `SELECT location_id FROM location WHERE name = ?`;
        db.get(locationQuery, [location], (err, row) => {
            if (err) {
                reject(err);
            } else if (!row) {
                reject('Location does not exist');
            } else {
                resolve(row.location_id);
            }
        });
    });
}

function checkUserExists(db, username) {
    return new Promise((resolve, reject) => {
        const userExistQuery = `SELECT COUNT(*) AS user_exists FROM user WHERE username = ?`;
        db.get(userExistQuery, [username], (err, row) => {
            if (err) {
                reject(err);
            } else if (row.user_exists > 0) {
                reject('User already exists');
            } else {
                resolve();
            }
        });
    });
}

function insertNewUser(db, username, password, email, locationId) {
    return new Promise((resolve, reject) => {
        const insertUserQuery = `INSERT INTO user (username, password, email, location_id) VALUES (?, ?, ?, ?)`;
        db.run(insertUserQuery, [username, password, email, locationId], function (err) {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}
