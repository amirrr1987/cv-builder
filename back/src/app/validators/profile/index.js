const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi)


const valdateCreateProfile = (data) => {
    const schema = Joi.object({
        theme: {
            color: Joi.string().min(4).max(100).required().message("color is required"),
            font: Joi.string().min(4).max(100).required().message("font is required")
        },
        image: Joi.string().min(4).max(100).required().message("image is required"),
        about: Joi.string().min(4).max(100).required().message("about is required"),
        title: Joi.string().min(4).max(100).required().message("title is required"),
        subTitle: Joi.string().min(4).max(100).required().message("subTitle is required"),
        fullName: {
            first: Joi.string().min(4).max(100).required().message("first is required"),
            last: Joi.string().min(4).max(100).required().message("last is required"),
        }
        // address: Joi.object().required().message("address must be between 4 and 8 characters"),
        // skillsSummary: Joi.array().required(),
        // contacts: Joi.array().required().message("address must be between 4 and 8 characters"),
        // educations: Joi.array().required().message("address must be between 4 and 8 characters"),
        // techExperiences: Joi.array().required().message("address must be between 4 and 8 characters"),
        // softwareKnowledges: Joi.array().required().message("address must be between 4 and 8 characters"),
        // experiences: Joi.array().required().message("address must be between 4 and 8 characters"),
        // socials: Joi.array().required().message("address must be between 4 and 8 characters"),
    });
    return schema.validate(data)
}

const valdateUpdateProfile = (data) => {
    const schema = Joi.object({
        id: Joi.objectId(),
        theme: Joi.object(),
        image: Joi.string().min(4).max(32).message("password must be between 4 and 8 characters"),
        about: Joi.string().min(4).max(32).message("password must be between 4 and 8 characters"),
        title: Joi.string().min(4).max(32).message("password must be between 4 and 8 characters"),
        subTitle: Joi.string().min(4).max(32).message("password must be between 4 and 8 characters"),
        fullName: Joi.object(),
        address: Joi.string().min(4).max(32).message("password must be between 4 and 8 characters"),
        skillsSummary: Joi.array(),
        contacts: Joi.array(),
        educations: Joi.array(),
        techExperiences: Joi.array(),
        softwareKnowledges: Joi.array(),
        experiences: Joi.array(),
        socials: Joi.array(),
    });
    return schema.validateAsync(data)
}


module.exports = {
    valdateCreateProfile,
    valdateUpdateProfile
}
