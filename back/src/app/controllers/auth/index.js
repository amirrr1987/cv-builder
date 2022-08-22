const Joi = require("joi");
const models = require("../../models");

class Controller {
    
    async getAll(req, res) {
        const resualt = await models.useAuthModel
            .find()
            .sort({ _id: 1 })
        res.statusCode = 200;
        res.send(resualt);
    }

    async postAll(req, res) {
        const { body } = req;
        let obj = {
            email: body.email,
            password: body.password
        }
        const schema = Joi.object({
            email: Joi.string().min(4).max(32).message("password must be between 4 and 8 characters"),
            password: Joi.string().min(4).max(32).message("password must be between 4 and 8 characters")
        });

        const newUser = models.useAuthModel(obj)

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
}


module.exports = new Controller();