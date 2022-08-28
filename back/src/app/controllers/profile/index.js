const Joi = require("joi");
const { useProfileModel } = require("../../models");

class Controller {
    async getAll(req, res) {
        try {
            const resualt = await useProfileModel
                .find()
                .sort({ _id: 1 })
            res.statusCode = 200;
            res.send({
                payload: resualt,
                message: "success"
            });
        } catch (error) {
            console.log(error);
        }
    }
    async getProfile(req, res) {
        try {
            const resualt = await useProfileModel
                .findById(req.params.profileId)
            res.send({
                payload: resualt,
                message: "success"
            });
        } catch (error) {
            console.log(error);
        }
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
                        company: {
                            name: item.company.name,
                            url: item.company.url
                        },
                        description: item.description,
                        beginDate: item.beginDate,
                        endDate: item.endDate,
                        skills: [
                            ...item.skills.map((single) => {
                                return {
                                    label: single.label
                                }
                            }),
                        ]
                    }
                }),
            ],
            socials: [
                ...body.socials.map((item) => {
                    return {
                        label: item.label,
                        icon: item.icon,
                        link: item.link
                    }
                }),
            ]
        }
        try {
            const item = await useProfileModel(obj)
            Object.assign(item, obj)
            console.log(item);
            await item.save();
            res.statusCode = 200;
            res.send({
                message: "Created",
            });
        } catch (error) {
            console.log(error);

        }

    }



    async postProfile(req, res) {
        const { body } = req;
        let obj = {
            _id: body._id,
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
                        company: {
                            name: item.company.name,
                            url: item.company.url
                        },
                        description: item.description,
                        beginDate: item.beginDate,
                        endDate: item.endDate,
                        skills: [
                            ...item.skills.map((single) => {
                                return {
                                    label: single.label
                                }
                            }),
                        ]
                    }
                }),
            ],
            socials: [
                ...body.socials.map((item) => {
                    return {
                        label: item.label,
                        icon: item.icon,
                        link: item.link
                    }
                }),
            ]
        }
        try {
            const item = await useProfileModel.findById(body._id)
            Object.assign(item, obj)
            console.log(item);
            await item.save();
            res.statusCode = 200;
            res.send({
                message: "update success",
            });
        } catch (error) {
            console.log(error);

        }

    }

}


module.exports = new Controller();