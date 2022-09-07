const mongoose = require("mongoose");

const schemaAuth = new mongoose.Schema({
    email: { type: String, required: true, default: "" },
    password: { type: String, required: true, default: "" },
    repassword: { type: String, required: true, default: "" }
});

const useAuthModel = mongoose.model("auth", schemaAuth);

module.exports = useAuthModel;