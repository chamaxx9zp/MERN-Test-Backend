const controller = require('./controller');
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json());

// Basic Route (get API)
app.get('/users', (req, res) => {
    controller.getUsers(users => {
        res.send(users);
    });
});

app.get('/user', (req, res) => {
    const id = req.query.id;
    controller.getUserById(id, user => {
        res.send(user);
    });
});


module.exports = app;