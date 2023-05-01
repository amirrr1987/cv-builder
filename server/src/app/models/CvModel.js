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
    image: { type: String, default: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg" },
    about: { type: String, default: "" },
    title: { type: String, default: "sample" },
    subTitle: { type: String, default: "sample" },
    fullName: {
        type: Object, default: {
            first: { type: String, default: "sample" },
            last: { type: String, default: "sample" }
        }
    },
    address: {
        type: Object, default: {
            country: { type: String, default: "sample" },
            province: { type: String, default: "sample" },
            region: { type: String, default: "sample" }
        }
    },
    skillsSummary: {
        type: [Object], default: [
            {
                label: "sample",
            }
        ]
    },
    contacts: {
        type: [Object], default: [
            {
                label: "sample",
                icon: "sample",
                link: "link",
            }
        ]
    },
    educations: {
        type: [Object], default: [
            {
                label: "sample",
            }
        ]
    },
    techExperiences: {
        type: [Object], default: [
            {
                label: "sample",
            }
        ]
    },
    softwareKnowledges: {
        type: [Object], default: [{
            label: { type: String, default: "sample" },
            skills: {
                type: [Object], default: [{
                    label: { type: String, default: "sample" }
                }]
            },
        }]
    },
    experiences: {
        type: [Object], default: [{
            label: { type: String, default: "sample" },
            company: {
                type: Object, default: {
                    name: { type: String, default: "sample" },
                    url: { type: String, default: "sample" }
                }
            },
            description: { type: String, default: "sample" },
            beginDate: { type: Date, default: Date.now() },
            endDate: { type: Date, default: Date.now() },
            skills: {
                type: [Object], default: [{
                    label: { type: String, default: "sample" }
                }]
            },
        }]
    },
    socials: {
        type: [Object], default: [{
            label: "", icon: "", link: "sample"
        }]
    },

});

const useCvModel = mongoose.model("Cv", schemaCv);

module.exports = useCvModel;