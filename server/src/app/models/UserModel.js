const mongoose = require("mongoose");

const schemaUser = new mongoose.Schema({
    mobile: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const useUserModel = mongoose.model("user", schemaUser);

module.exports = useUserModel;