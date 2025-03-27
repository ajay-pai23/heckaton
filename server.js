const express = require("express"); // Import Express.js
const cors = require("cors"); // Import CORS

const app = express(); // Create an Express app
app.use(cors()); // Enable CORS for frontend communication

app.use(express.static("home"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/home/index.html");
});


// Start the server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
