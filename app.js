var express = require("express");

var app = express();

app.use(express.static("public"));
app.use(express.static("src/views"));

app.get("/", function (request, response) {
    response.send("Hello, World!");
});

app.listen(process.env.PORT, function (error) {
    console.log("Hello, World!");
});