const Joi = require("joi");
const { useProfileModel } = require("../../models");
const { useProfileValidator } = require("../../validators");

class Controller {
  async GetAllProfile(req, res) {
    try {
      const resualt = await useProfileModel.find().sort({ _id: 1 });
      res.statusCode = 200;
      res.send({
        payload: resualt,
        message: "success",
      });
    } catch (error) {
      console.log(error);
    }
  }

  async GetProfile(req, res) {
    try {
      const resualt = await useProfileModel.findById(req.params.profileId);

      res.status(200).send({
        payload: resualt,
        message: "success",
        time_request: Date.now(),
        ip_address: req.connection.remoteAddress,
        agent: req.get("User-Agent"),
      });
    } catch (error) {
      console.log(error);
    }
  }

  async CreateProfile(req, res) {
    const { body } = req;

    let obj = {
      theme: {
        color: body.theme.color,
        font: body.theme.font,
        lang: body.theme.lang,
      },
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
            label: item.label,
          };
        }),
      ],
      contacts: [
        ...body.contacts.map((item) => {
          return {
            label: item.label,
            icon: item.icon,
          };
        }),
      ],
      educations: [
        ...body.educations.map((item) => {
          return {
            label: item.label,
          };
        }),
      ],
      techExperiences: [
        ...body.techExperiences.map((item) => {
          return {
            label: item.label,
          };
        }),
      ],
      softwareKnowledges: [
        ...body.softwareKnowledges.map((item) => {
          return {
            label: item.label,
            skills: [
              ...item.skills.map((single) => {
                return {
                  label: single.label,
                };
              }),
            ],
          };
        }),
      ],
      experiences: [
        ...body.experiences.map((item) => {
          return {
            title: item.title,
            company: {
              name: item.company.name,
              url: item.company.url,
            },
            description: item.description,
            beginDate: item.beginDate,
            endDate: item.endDate,
            skills: [
              ...item.skills.map((single) => {
                return {
                  label: single.label,
                };
              }),
            ],
          };
        }),
      ],
      socials: [
        ...body.socials.map((item) => {
          return {
            label: item.label,
            icon: item.icon,
            link: item.link,
          };
        }),
      ],
    };

    try {
      await useProfileValidator.valdateCreateProfile(obj);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }

    try {
      const item = await new useProfileModel(obj);
      Object.assign(item, obj);
      await item.save();
      res.statusCode = 200;
      res.status(200).send({
        message: "Created",
      });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }

  async UpdateProfile(req, res) {
    const { body } = req;
    let obj = {
      theme: {
        color: body.theme.color,
        font: body.theme.font,
        lang: body.theme.lang,
      },
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
            label: item.label,
          };
        }),
      ],
      contacts: [
        ...body.contacts.map((item) => {
          return {
            label: item.label,
            icon: item.icon,
          };
        }),
      ],
      educations: [
        ...body.educations.map((item) => {
          return {
            label: item.label,
          };
        }),
      ],
      techExperiences: [
        ...body.techExperiences.map((item) => {
          return {
            label: item.label,
          };
        }),
      ],
      softwareKnowledges: [
        ...body.softwareKnowledges.map((item) => {
          return {
            label: item.label,
            skills: [
              ...item.skills.map((single) => {
                return {
                  label: single.label,
                };
              }),
            ],
          };
        }),
      ],
      experiences: [
        ...body.experiences.map((item) => {
          return {
            title: item.title,
            company: {
              name: item.company.name,
              url: item.company.url,
            },
            description: item.description,
            beginDate: item.beginDate,
            endDate: item.endDate,
            skills: [
              ...item.skills.map((single) => {
                return {
                  label: single.label,
                };
              }),
            ],
          };
        }),
      ],
      socials: [
        ...body.socials.map((item) => {
          return {
            label: item.label,
            icon: item.icon,
            link: item.link,
          };
        }),
      ],
    };

    try {
      await useProfileValidator.valdateCreateProfile(obj);
    } catch (error) {
      // console.log(false);
      // res.setHeader('Content-Type', 'application/json');
      // res.status(400).send({ error: error.message });
      res.status(400).send({ error: error.message });
    }

    try {
      const item = await useProfileModel.findById(req.params.profileId);
      Object.assign(item, obj);
      await item.save();
      res.status(200).send({
        message: true,
        // result: result.message,
        time_request: Date.now(),
        ip_address: req.connection.remoteAddress,
        agent: req.get("User-Agent"),
      });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }

  async DeleteProfile(req, res) {
    try {
      await useProfileModel.findByIdAndRemove(req.params.profileId);
      res.status(200).send({ message: "delete success" });
    } catch (error) {
      res.send({ error: error });
    }
  }
}

module.exports = new Controller();
