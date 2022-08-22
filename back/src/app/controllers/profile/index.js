const Joi = require("joi");
const { useProfileModel } = require("../../models");

class Controller {
    async getAll(req, res) {
        const resualt = await useProfileModel
            .find()
            .sort({ _id: 1 })
        res.statusCode = 200;
        res.send({
            payload: resualt,
            message: "success"
        });
    }
    async getProfile(req, res) {
        const resualt = await useProfileModel
            .findById(req.params.profileId)

        res.send({
            payload: resualt,
            message: "success"
        });
    }
    async postAll(req, res) {
        const { body } = req;
        let obj = {
            image: body.image,
            about: body.about,
            title: body.title,
            subTitle: body.subTitle,
            fullName: {
                first: body.fullName.first,
                last: body.fullName.last,
            },
            address: {
                country: body.address.country,
                province: body.address.province,
                region: body.address.region,
            },

            skillsSummary: [
                ...body.skillsSummary.map((item) => {
                    return {
                        label: item.label
                    }
                }),
            ],
            contacts: [
                ...body.contacts.map((item) => {
                    return {
                        label: item.label,
                        icon: item.icon
                    }
                }),
            ],
            educations: [
                ...body.educations.map((item) => {
                    return {
                        label: item.label,
                    }
                }),
            ],
            techExperiences: [
                ...body.techExperiences.map((item) => {
                    return {
                        label: item.label,
                    }
                }),
            ],
            softwareKnowledges: [
                ...body.softwareKnowledges.map((item) => {
                    return {
                        label: item.label,
                        skills: item.skills
                    }
                }),
            ],
            experiences: [
                ...body.experiences.map((item) => {
                    return {
                        title: item.title,
                        company: item.company,
                        description: item.description,
                        beginDate: item.beginDate,
                        endDate: item.endDate,
                    }
                }),
            ],
            socials: [
                ...body.socials.map((item) => {
                    return {
                        title: item.title,
                        icon: item.icon,
                        link: item.link
                    }
                }),
            ]
        }
        // const schema = Joi.object({
        //     image: Joi.string().min(3).max(30).message("image must be between 3 and 30 characters"),
        //     fName: Joi.string().min(3).max(30).message("fName must be between 3 and 30 characters"),
        //     lName: Joi.string().min(3).max(30).message("lName must be between 3 and 30 characters"),
        //     title: Joi.string().min(3).max(30).message("title must be between 3 and 30 characters"),
        //     subTitle: Joi.string().min(3).max(30).message("subTitle must be between 3 and 30 characters"),
        //     about: Joi.string().min(3).max(30).message("about must be between 3 and 30 characters"),
        //     contact: Joi.array(),
        //     skillSummary: Joi.array(),
        //     education: Joi.string().min(3).max(3000).message("education must be between 3 and 30 characters"),
        //     techExperience: Joi.array(),
        //     softwareKnowledge: Joi.array(),
        //     experience: Joi.array(),
        //     social: Joi.array()
        // });

        const newProfile = useProfileModel(obj)

        // try {
        //     await schema.validateAsync(obj);
        // }
        // catch (err) {
        //     console.log("error:", "vaidation error");
        //     res.send({ error: err.message });
        // }

        try {
            await newProfile.save()
            res.send(newProfile);
        }
        catch (err) {
            console.log("error:", "save error");
            res.send({ error: err.message });
        }

    }

    async postProfile(req, res) {
        const { body } = req;

        let obj = {
            image: body.image,
            about: body.about,
            title: body.title,
            subTitle: body.subTitle,
            fullName: {
                first: body.fullName.first,
                last: body.fullName.last,
            },
            address: {
                country: body.address.country,
                province: body.address.province,
                region: body.address.region,
            },

            skillsSummary: [
                ...body.skillsSummary.map((item) => {
                    return {
                        label: item.label
                    }
                }),
            ],
            contacts: [
                ...body.contacts.map((item) => {
                    return {
                        label: item.label,
                        icon: item.icon
                    }
                }),
            ],
            educations: [
                ...body.educations.map((item) => {
                    return {
                        label: item.label,
                    }
                }),
            ],
            techExperiences: [
                ...body.techExperiences.map((item) => {
                    return {
                        label: item.label,
                    }
                }),
            ],
            softwareKnowledges: [
                ...body.softwareKnowledges.map((item) => {
                    return {
                        label: item.label,
                        skills: item.skills
                    }
                }),
            ],
            experiences: [
                ...body.experiences.map((item) => {
                    return {
                        title: item.title,
                        company: item.company,
                        description: item.description,
                        beginDate: item.beginDate,
                        endDate: item.endDate,
                    }
                }),
            ],
            socials: [
                ...body.socials.map((item) => {
                    return {
                        title: item.title,
                        icon: item.icon,
                        link: item.link
                    }
                }),
            ]
        }

        const resualt = await useProfileModel
            .findByIdAndUpdate(req.params.personalId, obj)

        res.statusCode = 200;
        res.send({
            message: "update success"
        });

    }

}


module.exports = new Controller();