const express = require('express');
const router = express.Router();

module.exports = function(db) {
    // Route handlers
    router.post('/login', login.bind(null, db));

    return router;
};

function login(db, req, res) {
    const { username, password } = req.body;

  
    getUserID(db, username)
        .then((result) => {
            if (!result.userId) {
                return false;
            }
            return verifyPassword(db, result.userId, password);
        })
        .then((valid) => {
            if (valid) {
                res.status(200).json({ message: 'Login successful' });
            } else {
                res.status(401).json({ error: 'Invalid username or password' });
            }
        })
        .catch((err) => {
            console.error('Error during login:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });


}
function getUserID(db, username) {
    return new Promise((resolve, reject) => {
        const userExistQuery = `SELECT user_id AS uid FROM user WHERE username = ?`;
        db.get(userExistQuery, [username], (err, row) => {
            if (err) {
                reject(err);
            } else if (!row) {
                // User does not exist, resolve to not do verification
                resolve({ userExists: false });
            } else {
                resolve({ userId: row.uid });
            }
        });
    });
}

function verifyPassword(db, userId, password) {
    return new Promise((resolve, reject) => {
        const verifyPasswordQuery = `SELECT password AS upw FROM user WHERE user_id = ?`;
        db.get(verifyPasswordQuery, [userId], (err, row) => {
            if (err) {
                reject(err);
            } else if (!row) {
                reject('User does not exist');
            } else {
                resolve(row.upw === password);
            }
        });
    });
}
