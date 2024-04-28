// TO LEARN MORE, REFRENCE THE SQLITE API
// https://github.com/TryGhost/node-sqlite3/wiki/API

//      !!!!!READ ME!!!!!
//  In order to use the database with this application you must:
//
// 1. open CLI
// 2. navigate to /model
// 3. run `node Database.js` 


const sqlite3 = require('sqlite3').verbose();
const fs = require("fs");
const path = require("path");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;


const initCourseTable = () => {
    const sqlCreateTable = `
    CREATE TABLE IF NOT EXISTS course (
        course_id INT AUTO_INCREMENT,
        name varchar(255),
        PRIMARY KEY (course_id)
    )`;

    db.run(sqlCreateTable, (err) => {
        if (err) {
            console.error('Error creating course table:', err.message);
        } else {
            console.log('course table created or already exists.');
        }
    });
}

const initLocationTable = () => {
    const sqlCreateTable = `
        CREATE TABLE IF NOT EXISTS location (
            location_id INT AUTO_INCREMENT,
            name varchar(80) NOT NULL,
            PRIMARY KEY (location_id)
        )`;
    db.run(sqlCreateTable, (err) => {
        if (err) {
            console.error('Error creating location table:', err.message);
        } else {
            console.log('location table created or already exists.');
        }
    });
}
    
const initUserTable = () => {
    const sqlCreateTable = `
    CREATE TABLE IF NOT EXISTS user (
        user_id INT AUTO_INCREMENT,
        username varchar(80) NOT NULL,
        password varchar(512) NOT NULL,
        email varchar(255) NOT NULL,
        location_id INT NOT NULL,
        PRIMARY KEY (user_id),
        FOREIGN KEY (location_id) REFERENCES location(location_id)
    )`;
    db.run(sqlCreateTable, (err) => {
        if (err) {
            console.error('Error creating user table:', err.message);
        } else {
            console.log('user table created or already exists.');
        }
    });
}

const initMemberTable = () => {
    const sqlCreateTable = `
    CREATE TABLE IF NOT EXISTS member (
        member_id INT,
        join_date DATE NOT NULL,
        membership_type varchar(32) NOT NULL,
        user_id INT NOT NULL,
        PRIMARY KEY (member_id),
        FOREIGN KEY (user_id) REFERENCES user(user_id)
    )`;
    db.run(sqlCreateTable, (err) => {
        if (err) {
            console.error('Error creating member table:', err.message);
        } else {
            console.log('member table created or already exists.');
        }
    });
}


const initStaffTable = () => {
    const sqlCreateTable = `
    CREATE TABLE IF NOT EXISTS staff (
        staff_id INT,
        role varchar(80) NOT NULL,
        user_id INT NOT NULL,
        PRIMARY KEY (staff_id),
        FOREIGN KEY (user_id) REFERENCES user(user_id)
    )`;
    db.run(sqlCreateTable, (err) => {
        if (err) {
            console.error('Error creating staff table:', err.message);
        } else {
            console.log('staff table created or already exists.');
        }
    });
}


const initManagerTable = () => {
    const sqlCreateTable = `
    CREATE TABLE IF NOT EXISTS manager (
        manager_id INT,
        user_id INT,
        PRIMARY KEY (manager_id),
        FOREIGN KEY (user_id) REFERENCES user(user_id)
    )`;
    db.run(sqlCreateTable, (err) => {
        if (err) {
            console.error('Error creating manager table:', err.message);
        } else {
            console.log('manager table created or already exists.');
        }
    });
}


const initStaffCourseTable = () => {
    const sqlCreateTable = `
    CREATE TABLE IF NOT EXISTS staff_course (
        staff_id INT NOT NULL,
        course_id INT NOT NULL,
        FOREIGN KEY (staff_id) REFERENCES staff(staff_id),
        FOREIGN KEY (course_id) REFERENCES course(course_id)
    )`;
    db.run(sqlCreateTable, (err) => {
        if (err) {
            console.error('Error creating staff_course table:', err.message);
        } else {
            console.log('staff_course table created or already exists.');
        }
    });
}



const listen = () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

const connectToDatabase = () => {
    const databasePath = path.resolve(__dirname, 'database.db');
    fs.access(databasePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.log('Database does not exist. Creating...');
        } else {
            console.log('Database exists. Connecting...');
        }

        db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
            if (err) {
                console.error('Error when connecting to the database:', err.message);
            } else {
                console.log('Connected to the SQLite database.');
                initCourseTable();
                initLocationTable();
                initUserTable();
                initMemberTable();
                initStaffTable();
                initManagerTable();
                initStaffCourseTable();
            }
        });
        return db;
    });
}
app.use(cors());
app.use(bodyParser.json());


app.post('/create-member', (req, res) => {
    const { username, password, email, location } = req.body;
    return res.status(201).json({ message: 'Form submitted Successfully' });
    //TODO: Query to see if user already exists.
    //      Create new user if they do not exist

    // const stmt = db.prepare('INSERT INTO CustomerInquiry (name, email, phoneNumber, message) VALUES (?, ?, ?, ?)');
  
    // stmt.run(name, email, phoneNumber, message, function (err) {
    //   stmt.finalize(); 
  
    //   if (err) {
    //     console.error(err);
    //     return res.status(500).json({ error: 'Internal server error' });
    //   }
  
    //   res.status(201).json({ message: 'Form data saved successfully' });
    // });
  });



db = connectToDatabase();
listen();
















