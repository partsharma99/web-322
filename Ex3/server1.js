const express = require("express");
const app = express();

//req --> sent from user to the server
//res --> servers reaponse to the request
app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(8080);