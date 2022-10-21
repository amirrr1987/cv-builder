const Joi = require("joi");
const { EventBus } = require("../global/event-bus");
const { useCvModel } = require("../models");
const { useCvValidator } = require("../validators");
class Controller {
  constructor() {
    EventBus.on('create-cv', (data) => {
      this.CreateFirstCv(data)
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
    const resualt = await useCvModel.find({ userId: params.id })
    res.status(200).send({
      code: 200,
      message: 'all user cv found',
      data: resualt,
      success: true,
    });
  }
  async GetOneCv(req, res) {
    const { params } = req;
    const resualt = await useCvModel.findOne({ _Id: params.cvId, userId: params.id, })
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
    const item = await new useCvModel();
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
    delete body.__v
    try {
      await useCvValidator.valdateUpdateCv(body);
    } catch (error) {
      // console.log(false);
      // res.setHeader('Content-Type', 'application/json');
      // res.status(400).send({ error: error.message });
      res.status(400).send({ error: error.message });
    }
    let one = await useCvModel.findByIdAndUpdate(params.id, body)
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
