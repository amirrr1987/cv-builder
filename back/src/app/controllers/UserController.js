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
        const { body } = req;

        await useUserValidator.valdateLoginUser(body)

        let user = await useUserModel.findOne({ mobile: body.mobile })

        if (!user) {
            return res.status(400).send({ message: "نام کاربری یا پسورد پیدا نشد" })
        }

        const { _id } = user;

        const result = await bcrypt.compare(body.password, user.password)

        if (!result) {
            return res.status(400).send({ message: "نام کاربری یا پسورد پیدا نشد" })
        }
        const data = {
            _id
        }

        const token = jwt.sign(data, tokenKey)

        data.token = token

        res
            .header("x-auth-token", token)
            .status(200)
            .send(
                {
                    code: 200,
                    data: data,
                    message: "User found",
                    success: true,
                }
            )
    }

    async RegisterUser(req, res) {

        const { body } = req;

        await useUserValidator.valdateRegisterUser(body)

        let auth = await useUserModel.findOne({ mobile: body.mobile })

        if (auth) return res.status(400).send({
            code: 400,
            data: {},
            message: "این کاربر قبلا ثبت نام شده",
            success: false,
        })

        else {
            auth = await new useUserModel(body);
            Object.assign(auth, body);
        }


        const salt = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(auth.password, salt)
        auth.password = password
        await auth.save();
        const { _id, mobile } = auth;
        const obj = {
            _id,
            mobile
        }
        EventBus.emit('create-cv', obj)
        res.status(201).send({
            code: 201,
            data: obj,
            message: "user created",
            success: true,
        });

    }

    async UpdateUser(req, res) {
        const { body, params } = req;

        const obj = {
            mobile: body.mobile,
            password: body.password
        }

        await useUserValidator.valdateRegisterUser(obj)

        const user = await useUserModel.findByIdAndUpdate(req.params.id, obj)
        const { _id } = user;
        const data = {
            _id
        }

        const token = jwt.sign(data, tokenKey)

        data.token = token

        if (user) {
            res
                .header("x-auth-token", token)
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
    }

    async DeleteUser(req, res) {
        const auth = await useUserModel.findByIdAndRemove(req.params.id)
        if (auth) {
            res.status(200).send({
                code: 200,
                data: {
                    _id: req.params.id
                },
                message: "User deleted",
                success: true,
            })
        }
    }

}
module.exports = new Controller();