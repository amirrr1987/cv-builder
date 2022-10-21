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
        let obj = _.pick(req.body, ["mobile", "password"])
        let auth;
        await useUserValidator.valdateLoginUser(obj)
        auth = await useUserModel.findOne({ mobile: obj.mobile })
        console.log('auth', auth);
        if (auth.mobile.length === 0 ) return res.status(400).send({ message: "نام کاربری یا پسورد پیدا نشد" })
        const result = await bcrypt.compare(obj.password, auth.password)
        if (result === false) return res.status(400).send({ message: "نام کاربری یا پسورد پیدا نشد" })
        const data = {
            _id: auth._id,
            mobile: auth.mobile
        }
        const token = jwt.sign(data, tokenKey)
        res.header("x-auth-token", token).status(200).send(
            {
                code: 200,
                data: { ...data, token: token },
                message: "User found",
                success: true,
            }
        )
    }
    async RegisterUser(req, res) {
        let obj = _.pick(req.body, ["mobile", "password"])
        let auth;
        try {
            await useUserValidator.valdateRegisterUser(obj)
        } catch (error) {
            res.status(400).send({
                code: 400,
                error: error.details,
                message: "",
                success: false,
            });
        }
        try {
            auth = await useUserModel.findOne({ mobile: obj.mobile })
            if (auth) return res.status(400).send({
                code: 400,
                data: {},
                message: "این کاربر قبلا ثبت نام شده",
                success: false,
            })
        } catch (error) {
            res.status(500).send({
                code: 500,
                error: error.details,
                message: "",
                success: false,
            });
        }
        try {
            auth = await new useUserModel(obj);
            Object.assign(auth, obj);
        } catch (error) {
            res.status(500).send({
                code: 500,
                error: error.details,
                message: "",
                success: false,
            });
        }
        try {
            const salt = await bcrypt.genSalt(10)
            const password = await bcrypt.hash(auth.password, salt)
            auth.password = password
            await auth.save();
        } catch (error) {
            res.status(500).send({
                code: 500,
                error: error.details,
                message: "",
                success: false,
            });
        }
        try {
            const token = await jwt.sign(obj.password, tokenKey)
            let sendData = {
                ...auth._doc, token
            }
            EventBus.emit('create-cv', sendData)
            res.status(201).send({
                code: 201,
                data: sendData,
                message: "",
                success: true,
            });
        } catch (error) {
            console.log('1', 1);
            res.status(500).send({
                code: 500,
                error: error.details,
                message: "",
                success: false,
            });
        }
    }
    async UpdateUser(req, res) {
        const { body, params } = req;
        console.log('params.id', params.id);
        console.log('body', body);
        let obj = {
            mobile: body.mobile,
            password: body.password
        }
        await useUserValidator.valdateRegisterUser(obj)
        let auth = await useUserModel.findByIdAndUpdate(req.params.id, obj)
        if (auth.mobile.length > 3) {
            res.status(200).send({
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
        let auth = await useUserModel.findByIdAndRemove(req.params.id)
        if (auth._id) {
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
    }
}
module.exports = new Controller();