const express = require("express");
const app = express();

app.get("/intrest", function (req, res) {
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);

    const result = (principal * rate * time) / 100;
    res.send({
        Final: result
    })

})

app.listen(4040);