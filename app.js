var express = require("express");

var app = express();

app.use(express.static("public"));

app.set("views", "./src/views/");
app.set("view engine", "ejs");

app.get("/", function (request, response){
   response.render("index"); 
});

app.listen(process.env.PORT, function (error) {
    if (!error) {
        console.log("I've started!");
    }
});