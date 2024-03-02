
// Require express
const express = require("express");
// Create the new express app instance for our API
const app = express();
const fs = require("fs");
var data = JSON.parse(fs.readFileSync('./mockData.json', 'utf8'));

// Define the route for the GET /greet endpoint
// 7-1.1 GET
app.get("/greet", (req, res) => {
  const name = req.query.name || "World";
  res.json({ message: `Hello, ${name}!` });
});

// 7-1.2 DELETE
app.delete("/myAccount", (req, res) => {
    res.send("Deleted");
});

// 7-1.2 DELETE
app.delete("/myAccount", (req, res) => {
    res.send("Deleted");
});

// 7.1-3 POST
app.post("/newComment", (req, res) => {
    res.send("Posted");
});

// TODO: Ex 6-2: You will need to use the "const data" above to access mockData.json for these two parts
// 7-2.1 DATA
app.get("/data", (req, res) => {
    res.json(data);
});

// 7-2.2 DATA/ID
app.get("/data/:id", (req, res) => {
    const itemId = req.params.id;
    const item = data.find((item) => item.id.toString() === itemId);
    if (item) {
        res.json(item);
    } else {
        res.status(404).send("Item not found");
    }
});

// TODO: Ex 6-2: You will need to use the "const data" above to access mockData.json for these two parts
// 7-2.1 DATA
app.get("/data", (req, res) => {
    res.json(data);
});

// 7-2.2 DATA/ID
app.get("/data/:id", (req, res) => {
    const itemId = req.params.id;
    const item = data.find((item) => item.id.toString() === itemId);
    if (item) {
        res.json(item);
    } else {
        res.status(404).send("Item not found");
    }
});

// Export the app for testing later
module.exports = app;