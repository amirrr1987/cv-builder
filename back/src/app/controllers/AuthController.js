const Joi = require("joi");
const { useAuthModel } = require("../models");
const { useAuthValidator } = require("../validators");
const _ = require("lodash")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { tokenKey } = require('../config');
const { EventBus } = require("../global/event-bus");
class Controller {
    async LoginAuth(req, res) {
        let obj = _.pick(req.body, ["mobile", "password"])
        try {
            await useAuthValidator.valdateLoginAuth(obj)
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
        let auth;
        try {
            auth = await useAuthModel.findOne({ mobile: obj.mobile })
            if (!auth) return res.status(400).send({ message: "نام کاربری یا پسورد پیدا نشد" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
        try {
            const result = await bcrypt.compare(obj.password, auth.password)
            if (!result) return res.status(400).send({ message: "نام کاربری یا پسورد پیدا نشد" })
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
        } catch (error) {
            res.status(500).send({
                code: 500,
                error: error.message,
                success: false,
            });
        }
    }

    async RegisterAuth(req, res) {

        let obj = _.pick(req.body, ["mobile", "password"])
        let auth;
        try {
            await useAuthValidator.valdateRegisterAuth(obj)
        } catch (error) {
            res.status(500).send({
                code: 500,
                error: error.details,
                message: "",
                success: false,
            });
        }


        try {
            auth = await useAuthModel.findOne({ mobile: obj.mobile })
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
            auth = await new useAuthModel(obj);
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
            EventBus.emit('create-profile', sendData)
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

    async UpdateAuth(req, res) {
        const { body } = req;
        let obj = {
            email: body.email,
            password: body.password
        }
        const schema = Joi.object({
            email: Joi.string().min(4).max(32).message("password must be between 4 and 8 characters"),
            password: Joi.string().min(4).max(32).message("password must be between 4 and 8 characters")
        });
        const newUser = useAuthModel(obj)
        try {
            await schema.validateAsync(obj);
        }
        catch (err) {
            console.log("error:", "vaidation error");
            res.send({ error: err.message });
        }
        try {
            await newUser.save()
            res.send(
                {
                    code: 200,
                    data: newUser,
                    message: "User updated",
                    success: true,
                }
            );
        }
        catch (err) {
            console.log("error:", "save error");
            res.send({ error: err.message });
        }
    }

    async DeleteAuth(req, res) {
        try {
            await useProfileModel.findByIdAndRemove(req.params.profileId);
            res.status(200).send({
                code: 200,
                data: '',
                message: "User deleted",
                success: true,
            });
        } catch (error) {
            res.send({ error: error });
        }
    }

}
module.exports = new Controller();