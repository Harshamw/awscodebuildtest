'user strict';
const express = require('express');
const jwt = require('jsonwebtoken');
const jwtsecret = "MS19803876";

const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userModel = {
        username,
        password
    };
    try {
        const result = await login.getUser(userModel);
        if (result == "OK") {
            const token = jwt.sign(userModel, jwtsecret, { expiresIn: 7200 }, '', '');
            const response = {
                "token": token,
                "tokenLifeInSeconds": 7200
            };
            res.status(200).json(response);
        }
        else {
            res.status(401).json("Invalid token");
        }
    } catch (e) {
        const response = { "message": e }
        res.status(401).json(response);
    }
});

router.get('/login', async (req, res) => {
    res.status(200).json("Hello World");
});
module.exports = router;