
const mongoose = require("mongoose");
const schemaHome = new mongoose.Schema({
    title: { type: String, required: true, default: "title" },
    description: { type: String, required: true, default: "description" },
    link: { type: String, required: true, default: "https://www.zoomit.ir/" },
    tags: { type: [String], required: true, default: ["html"],  },
    name: { type: String, required: true, default: "name" },
    // publish: {type: Date , required: true, default: Date.now},
    price: {
        type: Number, required: () => {
            return this.complete;
        }, default: 0
    },
    complete: { type: Boolean, required: true, default: false },
})

const HomeModel = mongoose.model("home", schemaHome)

module.exports = HomeModel;


