const express = require('express');
const app = express();

function verification(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    } else {
        res.status(411).json({
            msg: "You Are Not Eligible To Do This Ride"
        })
    }
};

app.use(verification);

app.get("/ride1", function (req, res) {
    res.json({
        msg: "You Have Done Ride1"
    })
});

app.get("/ride2", function (req, res) {
    res.json({
        msg: "You Have Done Ride2"
    })
});
app.listen(4040);