function login(db, req, res) {
    const { username, password } = req.body;

    let userId;

    getUserID(db, username)
        .then((result) => {
            if (!result.userId) {
                throw new Error('User does not exist'); 
            }
            userId = result.userId; 
            return verifyPassword(db, userId, password);
        })
        .then((valid) => {
            if (valid) {
                return getUserType(db, userId); 
            } else {
                res.status(401).json({ error: 'Invalid username or password' });
            }
        })
        .then((userType) => {
            res.status(200).json({ message: 'Login successful', userType }); 
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
                resolve({ userId: null });
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

function getUserType(db, userId) {
    return new Promise((resolve, reject) => {
        const getUserTypeQuery = `
            SELECT 
                CASE
                    WHEN EXISTS (SELECT 1 FROM member WHERE user_id = ?) THEN 'member'
                    WHEN EXISTS (SELECT 1 FROM manager WHERE user_id = ?) THEN 'manager'
                    WHEN EXISTS (SELECT 1 FROM staff WHERE user_id = ?) THEN 'staff'
                    ELSE 'unknown'
                END AS user_type
        `;
        db.get(getUserTypeQuery, [userId, userId, userId], (err, row) => {
            if (err) {
                reject(err);
            } else if (!row) {
                reject('User type not found');
            } else {
                resolve(row.user_type);
            }
        });
    });
}


module.exports = { login, getUserID, verifyPassword, getUserType };
