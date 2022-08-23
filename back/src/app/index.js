const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const cors = require("cors");
const bodyParser = require('body-parser')

class Application {
    constructor() {
        this.setDataBase();
        this.setMiddlewares();
        this.setRoutes();
        this.runServer();
    }
    runServer() {
        app.listen(port, () => {
            console.log("Server is running on port: " + port);
        });
    }
    setMiddlewares() {
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(express.json())
        app.use(cors());

    }
    async setDataBase() {
        try {
            await mongoose.connect("mongodb://localhost:27017/my-server", {
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
    }
}

const App = new Application()
module.exports = function useApp() {
    return App
}


