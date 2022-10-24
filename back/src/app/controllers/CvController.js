const Joi = require("joi");
const { EventBus } = require("../global/event-bus");
const { useCvModel } = require("../models");
const useUserModel = require("../models/UserModel");
const { useCvValidator } = require("../validators");
const _ = require("lodash")
const obj = {
  "userId": "",
  "theme": {
    "color": "sama",
    "font": "calibri",
    "lang": "en"
  },
  "image": "https://static.farakav.com/files/newspapers/varzesh3/820_Esteghlal-1400-01-19_1617824656.jpg?w=870",
  "about": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat",
  "title": "title",
  "subTitle": "subTitle",
  "fullName": {
    "first": "amir",
    "last": "maghami"
  },
  "address": {
    "country": "iren",
    "province": "azerbajan",
    "region": "khoy"
  },
  "skillsSummary": [
    {
      "label": "web"
    }
  ],
  "contacts": [
    {
      "label": "web",
      "icon": "cib:linkedin"
    }
  ],
  "educations": [
    {
      "label": "it"
    }
  ],
  "techExperiences": [
    {
      "label": "html"
    }
  ],
  "softwareKnowledges": [
    {
      "label": "basic",
      "skills": [
        {
          "label": "html"
        }
      ]
    }
  ],
  "experiences": [
    {
      "title": "front end developer",
      "company": {
        "name": "haco",
        "url": "haco.ir"
      },
      "description": "lorem",
      "beginDate": "234243",
      "endDate": "234243",
      "skills": [
        {
          "label": "html"
        }
      ]
    }
  ],
  "socials": [
    {
      "label": "instagram",
      "icon": "cib:linkedin",
      "link": ""
    }
  ],
}
var mongoose = require('mongoose');

class Controller {
  constructor() {
    EventBus.on('create-cv', (data) => {
      this.CreateFirstCv(data)
    })
    EventBus.on('delete-cv', (id) => {
      this.DeleteOneCvEventBus(id)
    })
    EventBus.on('update-cv', (data) => {
      // this.UpdateProfile(data)
    })
  }
  async GetAllCv(req, res) {
    const { id } = req.params;
    const userId = mongoose.Types.ObjectId(id);


    const resualt = await useCvModel.find({ userId: userId })

    res.status(200).send({
      code: 200,
      message: 'all user cv found',
      data: {
        id,
        cvs: resualt
      },
      success: true,
    });
  }
  async GetOneCv(req, res) {
    const { params } = req;
    const resualt = await useCvModel.findOne({ _Id: params.cvId })
    if (!resualt) {
      return res.status(404).send({
        code: 404,
        message: 'cv not found',
        data: {},
        success: false,
      });

    }
    res.status(200).send({
      code: 200,
      message: 'cv found',
      data: resualt,
      success: true,
    });
  }
  async CreateFirstCv(data) {
    const item = await new useCvModel();
    item.userId = data._id;
    await item.save();
  }
  async CreateOneCv(req, res) {
    const { params } = req;

    let user = await useUserModel.findById(params.id)
    if (!user) {
      return res.status(404).send({
        code: 404,
        data: {},
        message: "user not found",
        success: true,
      });

    }
    const item = await new useCvModel(obj);
    item.userId = params.id;
    await item.save();
    res.status(200).send({
      code: 201,
      data: item,
      message: "cv create",
      success: true,
    });

  }
  async UpdateOneCv(req, res) {
    const { body, params } = req;

    let user = await useUserModel.findById(params.id)
    if (!user) {
      return res.status(404).send({
        code: 404,
        data: {},
        message: "cv not found",
        success: true,
      });

    }
    await useCvValidator.valdateUpdateCv(body);

    let one = await useCvModel.findByIdAndUpdate(params.id, body)

    if (!one) {
      return res.status(404).send({
        code: 404,
        data: {},
        message: "cv not found",
        success: true,
      });
    }
    res.status(200).send({
      code: 201,
      data: one,
      message: "cv update",
      success: true,
    });
  }
  async DeleteOneCvEventBus(id, req, res) {
    await useCvModel.deleteMany({ userId: id })
    console.log('DeleteOneCvEventBus');
  }

  async DeleteOneCv(req, res) {
    const { params } = req
    const cv = await useCvModel.findOneAndRemove({ _id: params.cvId, userId: params.id })

    if (!cv) {
      return res.status(404).send({
        code: 404,
        data: {},
        message: "cv not found",
        success: false,
      });
    }
    res.status(200).send({
      code: 201,
      data: {},
      message: "cv delete",
      success: true,
    });


  }
}
module.exports = new Controller();
