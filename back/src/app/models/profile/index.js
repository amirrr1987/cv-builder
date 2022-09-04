const mongoose = require("mongoose");

const schemaProfile = new mongoose.Schema({
    theme: { type: String, required: true, default: "primary" },
    font: { type: String, required: true, default: "Arial" },
    image: { type: String, required: true, default: "" },
    about: { type: String, required: true, default: "" },
    title: { type: String, required: true, default: "" },
    subTitle: { type: String, required: true, default: "" },
    fullName: {
        type: Object, required: true, default: {
            first: { type: String, required: true, default: "" },
            last: { type: String, required: true, default: "" }
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
            skills: {
                type: [Object], required: true, default: [{
                    label: { type: String, required: true, default: "" }
                }]
            },
        }]
    },
    experiences: {
        type: [Object], required: true, default: [{
            label: { type: String, required: true, default: "" },
            company: {
                type: Object, required: true, default: {
                    name: { type: String, required: true, default: "" },
                    url: { type: String, required: true, default: "" }
                }
            },
            description: { type: String, required: true, default: "" },
            beginDate: { type: Date, required: true, default: Date.now() },
            endDate: { type: Date, required: true, default: Date.now() },
            skills: {
                type: [Object], required: true, default: [{
                    label: { type: String, required: true, default: "" }
                }]
            },
        }]
    },
    socials: {
        type: [Object], required: true, default: [{
            label: "", icon: "", link: ""
        }]
    },

});

const useProfileModel = mongoose.model("profile", schemaProfile);

module.exports = useProfileModel;