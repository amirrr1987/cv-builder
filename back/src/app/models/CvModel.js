const mongoose = require("mongoose");

const schemaCv = new mongoose.Schema({
    userId: { type: String, default: "" },
    theme: {
        type: Object, default: {
            color: { type: String, default: "blue" },
            font: { type: String, default: "vazir" },
            lang: { type: String, default: "en" }
        }
    },
    image: { type: String, default: "" },
    about: { type: String, default: "" },
    title: { type: String, default: "" },
    subTitle: { type: String, default: "" },
    fullName: {
        type: Object, default: {
            first: { type: String, default: "" },
            last: { type: String, default: "" }
        }
    },
    address: {
        type: Object, default: {
            country: { type: String, default: "" },
            province: { type: String, default: "" },
            region: { type: String, default: "" }
        }
    },
    skillsSummary: {
        type: [Object], default: [
            {
                label: "",
            }
        ]
    },
    contacts: {
        type: [Object], default: [
            {
                label: "",
                icon: ""
            }
        ]
    },
    educations: {
        type: [Object], default: [
            {
                label: "",
            }
        ]
    },
    techExperiences: {
        type: [Object], default: [
            {
                label: "",
            }
        ]
    },
    softwareKnowledges: {
        type: [Object], default: [{
            label: { type: String, default: "" },
            skills: {
                type: [Object], default: [{
                    label: { type: String, default: "" }
                }]
            },
        }]
    },
    experiences: {
        type: [Object], default: [{
            label: { type: String, default: "" },
            company: {
                type: Object, default: {
                    name: { type: String, default: "" },
                    url: { type: String, default: "" }
                }
            },
            description: { type: String, default: "" },
            beginDate: { type: Date, default: Date.now() },
            endDate: { type: Date, default: Date.now() },
            skills: {
                type: [Object], default: [{
                    label: { type: String, default: "" }
                }]
            },
        }]
    },
    socials: {
        type: [Object], default: [{
            label: "", icon: "", link: ""
        }]
    },

});

const useCvModel = mongoose.model("Cv", schemaCv);

module.exports = useCvModel;