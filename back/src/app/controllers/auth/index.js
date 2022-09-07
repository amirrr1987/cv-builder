const Joi = require("joi");
const { useAuthModel } = require("../../models");
const { useAuthValidator } = require("../../validators");
class Controller {
    
    async GetAuth(req, res) {
        const resualt = await useAuthModel
            .find()
            .sort({ _id: 1 })
        res.statusCode = 200;
        res.send(resualt);
    }

    async CreateAuth(req, res) {
        const { body } = req;
        let obj = {
            email: body.email,
            password: body.password,
            repassword: body.repassword
        }
        try {
            await useAuthValidator.valdateCreateAuth(obj)
        }
        catch (err) {
            res.status(500).send({ error: error.message });
        }

        try {
            const item = await useAuthModel(obj);
            Object.assign(item, obj);
            await item.save();
            res.statusCode = 200;
            res.status(200).send({
              message: "Created",
              item:item
            });
          } catch (error) {
            res.status(500).send({ error: error.message });
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