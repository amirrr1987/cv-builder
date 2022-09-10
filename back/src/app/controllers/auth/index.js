const Joi = require("joi");
const { useAuthModel } = require("../../models");
const { useAuthValidator } = require("../../validators");
const _ = require("lodash")
const bcrypt = require("bcrypt")
class Controller {

    async LoginAuth(req, res) {
        const {body} = req
        let obj = _.pick(body, ["mobile", "password"])


        try {
            await useAuthValidator.valdateRegisterAuth(obj)
            console.log(obj);
            console.log(obj);
        } catch (error) {
            console.log(obj);
            res.status(500).send({ error: error.message });
        }



        try {
            let auth = await useAuthModel.findOne({ mobile: body.mobile })
            if (!auth) return res.status(400).send({ message: "نام کاربری یا پسورد پیدا نشد" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }


        try {
            const result = await bcrypt.compare(obj.password, auth.password)
            if (!result) return res.status(400).send({ message: "نام کاربری یا پسورد پیدا نشد" })

            res.status(200).send(true)

        } catch (error) {
            res.status(500).send({ error: error.message });
        }

        try {
            let auth = await new useAuthModel(obj);
            Object.assign(auth, obj);
            const salt = await bcrypt.genSalt(10)
            const password = await bcrypt.hash(auth.password, salt)
            auth.password = password
            await auth.save();
            res.status(200).send({
                message: "Created",
                auth: _.pick(auth, ["mobile", "_id"])
            });
        } catch (error) {
            res.status(500).send({ error: error });
        }

    }

    async RegisterAuth(req, res) {
        const { body } = req;
        let obj = _.pick(req.body, ["mobile", "password"])


        try {
            await useAuthValidator.valdateRegisterAuth(obj)
        } catch (error) {
            res.status(400).send({ error: error.message });
        }


        let auth;
        try {
            auth = await useAuthModel.findOne({ mobile: body.mobile })
            if (auth) return res.status(400).send({ message: "این کاربر قبلا ثبت نام شده" })
        } catch (error) {
            res.status(400).send({ message: error.message })
        }

        try {
            auth = await new useAuthModel(obj);
            Object.assign(auth, obj);
            const salt = await bcrypt.genSalt(10)
            const password = await bcrypt.hash(auth.password, salt)
            auth.password = password
            await auth.save();
            res.status(200).send({
                message: "Created",
                auth: _.pick(auth, ["mobile", "_id"])
            });
        } catch (error) {
            res.status(500).send({ error: error });
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
            res.send(newUser);
        }
        catch (err) {
            console.log("error:", "save error");
            res.send({ error: err.message });
        }

    }

    async DeleteAuth(req, res) {
        try {
            await useProfileModel.findByIdAndRemove(req.params.profileId);
            res.status(200).send({ message: "delete success" });
        } catch (error) {
            res.send({ error: error });
        }
    }
}


module.exports = new Controller();