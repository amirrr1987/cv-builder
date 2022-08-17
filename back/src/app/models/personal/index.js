const mongoose = require("mongoose");

const schemaPersonal = new mongoose.Schema({
    image: { type: String, required: true, default: "" },
    about: { type: String, required: true, default: "" },
    title: { type: String, required: true, default: "" },
    subTitle: { type: String, required: true, default: "" },
    fullName: {
        type: Object, required: true, default: {
            first: { type: String, required: true, default: "" },
            last: { type: String, required: true, default: "" },
        }
    },
    address: {
        type: Object, required: true, default: {
            country: { type: String, required: true, default: "" },
            province: { type: String, required: true, default: "" },
            region: { type: String, required: true, default: "" }

        }
    },
    skillsSummary: {
        type: [Object], required: true, default: [
            {
                label: "",
            }
        ]
    },
    contacts: {
        type: [Object], required: true, default: [
            {
                label: "",
                icon: ""
            }
        ]
    },
    educations: {
        type: [Object], required: true, default: [
            {
                label: "",
            }
        ]
    },
    techExperiences: {
        type: [Object], required: true, default: [
            {
                label: "",
            }
        ]
    },
    softwareKnowledges: {
        type: [Object], required: true, default: [{
            label: { type: String, required: true, default: "" },
            skills: { type: Array, required: true, default: [""] },
        }]
    },
    experiences: {
        type: [Object], required: true, default: [{
            title: { type: String, required: true, default: "" },
            company: { type: String, required: true, default: "" },
            description: { type: String, required: true, default: "" },
            beginDate: { type: String, required: true, default: "" },
            endDate: { type: String, required: true, default: "" },
            skills: { type: [String], required: true, default: [""] },
        }]
    },
    socials: { type: [Object], required: true, default: [{ title: "", icon: "", link: "" }] },

});

const usePersonalModel = mongoose.model("personal", schemaPersonal);

module.exports = usePersonalModel;