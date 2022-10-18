const Joi = require("joi");
const { EventBus } = require("../global/event-bus");
const { useProfileModel } = require("../models");
const { useProfileValidator } = require("../validators");
class Controller {

  constructor() {
    EventBus.on('create-profile', (data) => {
      this.CreateProfile(data)
    })
  }

  async GetProfile(req, res) {
    try {
      const resualt = await useProfileModel.findOne({ user_id: req.params.personalId })
      if (resualt) {
        res.status(200).send({
          code: 200,
          message: 'user found',
          data: resualt,
          success: true,
        });
      }
      else {
        res.status(404).send({
          code: 404,
          message: 'user not found',
          data: null,
          success: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async CreateProfile(data, req, res) {

    console.log('data', data);

    let obj = {
      user_id: data._id,
      theme: {
        color: 'blue',
        font: 'calibre',
        lang: 'en',
      },
      image: 'https://i1.sndcdn.com/avatars-000812665324-tbg3oh-t500x500.jpg',
      about: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat',
      title: 'title',
      subTitle: 'subTitle',
      fullName: {
        first: 'amir',
        last: 'maghami',
      },
      address: {
        country: 'iren',
        province: 'azerbajan',
        region: 'khoy',
      },
      skillsSummary: [
        {
          label: 'web',
        }
      ],
      contacts: [
        {
          label: 'web',
          icon: 'cib:linkedin'
        }
      ],
      educations: [
        {
          label: 'it',
        }
      ],
      techExperiences: [
        {
          label: 'html',
        }
      ],
      softwareKnowledges: [{
        label: 'basic',
        skills: [
          {
            label: 'html',
          }
        ],
      }],
      experiences: [
        {
          title: 'front end developer',
          company: {
            name: 'haco',
            url: 'haco.ir',
          },
          description: 'lorem',
          beginDate: '234243',
          endDate: '234243',
          skills: [
            {
              label: 'html',
            }
          ],
        }
      ],
      socials: [
        {
          label: 'instagram',
          icon: 'cib:linkedin',
          link: 'instagram.ir',
        }
      ],
    };

    // const { err } = await useProfileValidator.valdateCreateProfile(obj);
    // if (err) {
    //   return res.send({
    //     code: 345,
    //     valdate: err,
    //     message: "valdate error",
    //     success: false,
    //   })
    // }

    const item = await new useProfileModel(obj);
    item.user_id = data._id;
    Object.assign(item, obj);
    await item.save();
  }

  async UpdateProfile(req, res) {
    const { body } = req;
    let obj = {
      user_id: body.theme.userId,
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
      const item = await useProfileModel.findById(req.params.personalId);
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
