const mongoose = require("mongoose");

const schemaAuth = new mongoose.Schema({
    mobile: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const useAuthModel = mongoose.model("auth", schemaAuth);

module.exports = useAuthModel;