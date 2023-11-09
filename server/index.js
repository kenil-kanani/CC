//package imports
import express from "express";
import dotenv from "dotenv";

//Dot ENV config
dotenv.config();

//rest object
const app = express();

//routes
app.get("/", (req, res) => {
    res.send("<h1>Welcome to the server</h1>")
})

//port
const PORT = process.env.PORT || 8080

//listen
app.listen(PORT, () => {
    console.log(`Node Server is Running in ${process.env.DEV_MODE} on PORT ` + PORT)
})