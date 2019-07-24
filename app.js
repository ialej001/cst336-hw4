const express = require("express");
const faker = require("faker");
const fakeName = faker.name.firstName() + " " + faker.name.lastName();
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

app.get("/", function(req,res) {
    res.render("home.ejs");
});

app.get("/java", function(req,res) {
    res.render("java.ejs", {"date": faker.random.number({min:1950, max:1999})});
});

app.get("/python", function(req,res) {
    res.render("python.ejs", {"date1": faker.random.number({min:1950, max:1999})});
});

app.get("/cplusplus", function(req,res) {
    res.render("c++.ejs", {"name": faker.name.firstName() + " " + faker.name.lastName()});
});

//local server listener
app.listen("8081","127.0.0.1", function() {
    console.log("Express Server is Running...");
});

//heroku server listener
/*app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Running Express Server...");
});*/
