const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {connectToDatabase} = require('./models/Database');
const memberRoutes = require('./routes/memberRoutes');
const userRoutes = require('./routes/userRoutes');
const managerRoutes = require('./routes/managerRoutes');
const staffRoutes = require('./routes/staffRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

connectToDatabase() //Returns DB Instance (db)
    .then((db) => {
        // I didnt add Routes here!!
        app.use('/api/videos', memberRoutes(db));
        app.use('/api/roles', memberRoutes(db));
        app.use('/api/upload-video', memberRoutes(db));
        app.use('/api/update-video', memberRoutes(db));
        app.use('/api/delete-video', memberRoutes(db));
        app.use('/api/staff', staffRoutes(db));
        app.use('/api/member', memberRoutes(db));
        app.use('/api/manager', managerRoutes(db));
        app.use('/api/user', userRoutes(db));


        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to database:', err);
    });
