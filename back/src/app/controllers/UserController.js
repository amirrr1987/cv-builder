const Joi = require("joi");
const { useUserModel } = require("../models");
const { useUserValidator } = require("../validators");
const _ = require("lodash")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { tokenKey } = require('../config');
const { EventBus } = require("../global/event-bus");
class Controller {

    async LoginUser(req, res) {
        const obj = _.pick(req.body, ["mobile", "password"])



        await useUserValidator.valdateLoginUser(obj)

        const user = await useUserModel.findOne({
            mobile: obj.mobile
        })

        if (!user) {
            return res
                .status(404)
                .send(
                    {
                        code: 404,
                        data: {},
                        message: "username or password not found",
                        success: false,
                    }
                )
        }

        const result = await bcrypt.compare(obj.password, user.password)

        if (!result) {
            return res.status(400).send({ message: "username or password not found" })
        }

        const token = jwt.sign(obj, tokenKey)

        obj.token = token
        obj._id = user._id
        delete obj.password

        res
            .status(200)
            .send(
                {
                    code: 200,
                    data: obj,
                    message: "User found",
                    success: true,
                }
            )
    }

    async RegisterUser(req, res) {
        const obj = _.pick(req.body, ["mobile", "password"])



        try {
            await useUserValidator.valdateRegisterUser(obj)
        } catch (error) {
            let errs = [];
            error.details.forEach((item) => {
                errs.push(item.message)
            })

            return res.status(400).send({
                code: 400,
                errors: errs,
                message: "This user is already registered",
                success: false,
            })
        }



        let auth = await useUserModel.findOne({
            mobile: obj.mobile
        })

        if (auth) {
            return res.status(400).send({
                code: 400,
                data: {},
                message: "This user is already registered",
                success: false,
            })
        }

        auth = await new useUserModel(obj);
        Object.assign(auth, obj);

        const salt = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(auth.password, salt)

        auth.password = password
        await auth.save();

        EventBus.emit('create-cv', auth._id)
        const { _id, mobile } = auth
        res.status(201).send({
            code: 201,
            data: {
                _id,
                mobile
            },
            message: "user created",
            success: true,
        });

    }

    async UpdateUser(req, res) {
        const obj = _.pick(req.body, ["mobile", "password"])

        await useUserValidator.valdateRegisterUser(obj)

        const user = await useUserModel.findByIdAndUpdate(req.params.id, obj)


        if (user) {
            res
                .status(200)
                .send({
                    code: 200,
                    data: {
                        _id: req.params.id
                    },
                    message: "User update",
                    success: true,
                })
        }
        else {
            res
                .status(404)
                .send({
                    code: 404,
                    data: {},
                    message: "User not found",
                    success: false,
                })
        }
    }

    async DeleteUser(req, res) {
        const auth = await useUserModel.findByIdAndRemove(req.params.id)
        if (auth) {
            EventBus.emit('delete-cv', req.params.id)
            res.status(200).send({
                code: 200,
                data: {
                    _id: req.params.id
                },
                message: "User deleted",
                success: true,
            })
        }
        else {
            res
                .status(404)
                .send({
                    code: 404,
                    data: {},
                    message: "User not found",
                    success: false,
                })
        }
    }

}
module.exports = new Controller();