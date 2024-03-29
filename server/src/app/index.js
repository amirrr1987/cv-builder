const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const cors = require("cors");
const bodyParser = require('body-parser')

class Application {
    constructor() {
        this.setDataBase();
        this.setMiddleware();
        this.setRoutes();
        this.runServer();
    }
    runServer() {
        app.listen(port, () => {
            console.log("Server is running on port: " + port);
        });
    }
    setMiddleware() {
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json())
        app.use(cors());
    }
    async setDataBase() {
        try {
            await mongoose.connect("mongodb://localhost:27017/cv", {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            console.log("Connected to mongoDB");
        } catch (error) {
            console.log("Error connecting to mongoDB");
        }

    }
    setRoutes() {
        app.use(require("./routes"));
        // console.log("routes is allready to use");
    }
}

const App = new Application()
module.exports = function useApp() {
    return App
}


