const express = require("express");
const app = express();

app.get("/intrest", function (req, res) {
    const P = req.query.principle;
    const R = req.query.rate;
    const N = req.query.time;
    const final = parseInt(P) * parseInt(R) * parseInt(N);

    res.text({
        total: final
    })
})

app.listen(4040);