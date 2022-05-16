require("dotenv").config();
const {PORT = 3000, MONGODB_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require('mongoose');

//import middleware
const cors = require ('cors');
const morgan = require ('morgan');
mongoose.connect(MONGODB_URL);

mongoose.connection
.on("open", () => console.log("Your are connected to mongoose"))
.on("close", () => console.log("Your are disconnected from mongoose"))
.on("error", (error) => console.log(error));

//ROUTES
app.get("/", (req,res) => {
    res.send ("hello world")
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));