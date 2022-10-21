const Joi = require("joi");
const { EventBus } = require("../global/event-bus");
const { useProfileModel } = require("../models");
const { useProfileValidator } = require("../validators");
class Controller {

  constructor() {
    EventBus.on('create-cv', (data) => {
      this.CreateOneCv(data)
    })
    EventBus.on('delete-cv', (data) => {
      this.DeleteCv(data)
    })
    EventBus.on('update-cv', (data) => {
      // this.UpdateProfile(data)
    })
  }

  async GetAllCv(req, res) {

    const { params } = req;

    const resualt = await useProfileModel.find({ userId: params.id })

    if (resualt) {
      res.status(200).send({
        code: 200,
        message: 'user found',
        data: resualt,
        success: true,
      });
    }
    else {
      res.status(200).send({
        code: 404,
        message: 'user not found',
        data: null,
        success: false,
      });
    }

  }


  async GetOneCv(req, res) {

    const { params } = req;

    const resualt = await useProfileModel.findOne({ _Id: params.cvId, userId: params.id, })

    if (resualt) {
      res.status(200).send({
        code: 200,
        message: 'cv found',
        data: resualt,
        success: true,
      });
    }
    else {
      res.status(200).send({
        code: 404,
        message: 'cv not found',
        data: null,
        success: false,
      });
    }
  }


  async CreateOneCv(data, req, res) {
    console.log('data', data);
    let obj = {
      userId: data._id,
      theme: {
        color: 'blue',
        font: 'calibri',
        lang: 'en',
      },
      image: 'https://static.farakav.com/files/newspapers/varzesh3/820_Esteghlal-1400-01-19_1617824656.jpg?w=870',
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
    const item = await new useProfileModel(obj);
    item.user_id = data._id;
    Object.assign(item, obj);
    await item.save();
  }

  async UpdateOneCv(req, res) {
    const { body, params } = req;
    delete body.__v
    try {
      await useProfileValidator.valdateUpdateProfile(body);
    } catch (error) {
      // console.log(false);
      // res.setHeader('Content-Type', 'application/json');
      // res.status(400).send({ error: error.message });
      res.status(400).send({ error: error.message });
    }
    let one = await useProfileModel.findByIdAndUpdate(params.personalId, body)
    res.status(200).send({
      code: 201,
      data: one,
      message: "cv update",
      success: true,
    });
  }

  async DeleteOneCv(data, req, res) {
    await useProfileModel.findOneAndRemove({ userId: data })
  }

}
module.exports = new Controller();
