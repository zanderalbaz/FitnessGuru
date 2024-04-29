// TO LEARN MORE, REFRENCE THE SQLITE API
// https://github.com/TryGhost/node-sqlite3/wiki/API

//      !!!!!READ ME!!!!!
//  In order to use the database with this application you must:
//
// 1. open CLI
// 2. navigate to model/
// 3. run `node Database.js` 

const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

var dbInstance;
const initializeTables = async (db) => {
    try {
        await initLocationTable(db);
        await initUserTable(db);
        await initCourseTable(db);
        await initMemberTable(db);
        await initStaffTable(db);
        await initManagerTable(db);
        await initStaffCourseTable(db);
    } catch (error) {
        console.error('Error initializing tables:', error);
        throw error; 
    }
};

const initCourseTable = (db) => {
    return new Promise((resolve, reject) => {
        const sqlCreateTable = `
            CREATE TABLE IF NOT EXISTS course (
                course_id INTEGER PRIMARY KEY AUTOINCREMENT,
                name VARCHAR(255)
            )`;

        db.run(sqlCreateTable, (err) => {
            if (err) {
                console.error('[X] course: ', err.message);
                reject(err);
            } else {
                console.log('[*] course');
                resolve();
            }
        });
    });
};

const initLocationTable = (db) => {
    return new Promise((resolve, reject) => {
        const sqlCreateTable = `
            CREATE TABLE IF NOT EXISTS location (
                location_id INTEGER PRIMARY KEY AUTOINCREMENT,
                name VARCHAR(80) NOT NULL
            )`;

        db.run(sqlCreateTable, (err) => {
            if (err) {
                console.error('[X] location: ', err.message);
                reject(err);
            } else {
                console.log('[*] location');
                resolve();
            }
        });
    });
};

const initUserTable = (db) => {
    return new Promise((resolve, reject) => {
        const sqlCreateTable = `
            CREATE TABLE IF NOT EXISTS user (
                user_id INTEGER PRIMARY KEY AUTOINCREMENT,
                username VARCHAR(80) NOT NULL,
                password VARCHAR(512) NOT NULL,
                email VARCHAR(255) NOT NULL,
                location_id INT NOT NULL,
                FOREIGN KEY (location_id) REFERENCES location(location_id)
            )`;

        db.run(sqlCreateTable, (err) => {
            if (err) {
                console.error('[X] user: ', err.message);
                reject(err);
            } else {
                console.log('[*] user');
                resolve();
            }
        });
    });
};

const initMemberTable = (db) => {
    return new Promise((resolve, reject) => {
        const sqlCreateTable = `
            CREATE TABLE IF NOT EXISTS member (
                member_id INTEGER PRIMARY KEY AUTOINCREMENT,
                join_date DATE NOT NULL,
                membership_type VARCHAR(32) NOT NULL,
                user_id INT NOT NULL,
                FOREIGN KEY (user_id) REFERENCES user(user_id)
            )`;

        db.run(sqlCreateTable, (err) => {
            if (err) {
                console.error('[X] member: ', err.message);
                reject(err);
            } else {
                console.log('[*] member');
                resolve();
            }
        });
    });
};

const initStaffTable = (db) => {
    return new Promise((resolve, reject) => {
        const sqlCreateTable = `
            CREATE TABLE IF NOT EXISTS staff (
                staff_id INTEGER PRIMARY KEY AUTOINCREMENT,
                role VARCHAR(80) NOT NULL,
                user_id INT NOT NULL,
                FOREIGN KEY (user_id) REFERENCES user(user_id)
            )`;

        db.run(sqlCreateTable, (err) => {
            if (err) {
                console.error('[X] staff: ', err.message);
                reject(err);
            } else {
                console.log('[*] staff');
                resolve();
            }
        });
    });
};

const initManagerTable = (db) => {
    return new Promise((resolve, reject) => {
        const sqlCreateTable = `
            CREATE TABLE IF NOT EXISTS manager (
                manager_id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INT,
                FOREIGN KEY (user_id) REFERENCES user(user_id)
            )`;

        db.run(sqlCreateTable, (err) => {
            if (err) {
                console.error('[X] manager: ', err.message);
                reject(err);
            } else {
                console.log('[*] manager');
                resolve();
            }
        });
    });
};

const initStaffCourseTable = (db) => {
    return new Promise((resolve, reject) => {
        const sqlCreateTable = `
            CREATE TABLE IF NOT EXISTS staff_course (
                staff_id INT NOT NULL,
                course_id INT NOT NULL,
                FOREIGN KEY (staff_id) REFERENCES staff(staff_id),
                FOREIGN KEY (course_id) REFERENCES course(course_id)
            )`;

        db.run(sqlCreateTable, (err) => {
            if (err) {
                console.error('[X] staff_course: ', err.message);
                reject(err);
            } else {
                console.log('[*] staff_course');
                resolve();
            }
        });
    });
};

const connectToDatabase = () => {
    const databasePath = path.resolve(__dirname, 'database.db');

    return new Promise((resolve, reject) => {
        fs.access(databasePath, fs.constants.F_OK, (err) => {
            if (err) {
                console.log('Database does not exist. Creating...');
            } else {
                console.log('Database exists. Connecting...');
            }

            dbInstance = new sqlite3.Database(databasePath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
                if (err) {
                    console.error('Error when connecting to the database:', err.message);
                    reject(err);
                } else {
                    console.log('Connected to the SQLite database.');
                    initializeTables(dbInstance)
                        .then(() => {
                            console.log("All tables initialized successfully.");
                        })
                        .catch((error) => {
                            console.error("Error initializing tables:", error);
                        });                    
                    resolve(dbInstance);
                }
            });
        });
    });
};


module.exports = {connectToDatabase };







