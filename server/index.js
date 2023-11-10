//package imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const colors = require("colors");

// files imports
const { connectDB } = require("./src/config/databaseConfig.js");
const { PORT } = require("./src/config/serverConfig.js");
const ApiRoutes = require('./src/routes/index.js')

//* Defination of legend function
const setUpAndStartServer = async () => {

    try {
        //! connect to database
        await connectDB();

        const app = express();

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.use(cors());

        app.use('/api', ApiRoutes);

        app.listen(PORT, () => {
            console.log(`Node Server is Running in ${process.env.DEV_MODE} on PORT ${PORT}`.brightCyan.bgGray);
        });
    } catch (error) {
        console.log("Error, connecting to database..." + error);
        throw error;
    }
}

//* Calling the legend function of the file...
setUpAndStartServer();