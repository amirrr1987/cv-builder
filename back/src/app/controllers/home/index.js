const Joi = require("joi");
const models = require("../../models");
class Controller {

    async getAll(req, res) {
        const list = await models.useHomeModel
            .find()
            .sort({ _id: 1 })
        res.send(list)
    }
    async getPagination(req, res) {
        const list = await models.useHomeModel
            .find()
            .skip((req.query.pageNumber - 1) * req.query.pageSize)
            .limit(req.query.pageSize)
            .sort({ _id: 1 })
        res.send(list)
    }

    async getOne(req, res) {
        const one = await models.useHomeModel.findById(req.params.id)
        res.send(one)

    }

    async setOne(req, res) {
        const { body } = req;
        let obj = {
            title: body.title,
            description: body.description,
            link: body.link,
            tags: body.tags,
            name: body.name,
            complete: body.complete,
            price: body.price,
        }

        const schema = Joi.object({
            title: Joi.string().min(3).max(10).message("title must be between 3 and 10 characters"),
            name: Joi.string().min(3).max(10).message("name must be between 3 and 10 characters"),
            description: Joi.string().min(3).max(10).message("description must be between 3 and 10 characters"),
            link: Joi.string().min(3).max(10).message("link must be between 3 and 10 characters"),
            tags: Joi.array().items(Joi.string().min(3).max(10).message("tags must be between 3 and 10 characters")).required(),
            complete: Joi.boolean().required(),
            price: Joi.number().required()
        });

        const newHome = models.useHomeModel(obj)

        try {
            await schema.validateAsync(obj);
            await newHome.save()
            res.send(newHome);
        }
        catch (err) {
            res.send({ error: err.message });
        }
    }

    async updateOne(req, res) {
        const { body } = req;

        const schema = Joi.object({
            title: Joi.string().min(3).max(10).message("title must be between 3 and 10 characters"),
            name: Joi.string().min(3).max(10).message("name must be between 3 and 10 characters"),
            description: Joi.string().min(3).max(10).message("description must be between 3 and 10 characters"),
            link: Joi.string().min(3).max(10).message("link must be between 3 and 10 characters"),
            tags: Joi.array().items(Joi.string().min(3).max(10).message("tags must be between 3 and 10 characters")).required(),
            complete: Joi.boolean().required(),
            price: Joi.number().required()
        });

        try {
            await schema.validateAsync(body);
            const result = await models.useHomeModel.findByIdAndUpdate(req.params.id,
                {
                    $set: {
                        title: body.title,
                        name: body.name,
                        description: body.description,
                        link: body.link,
                        tags: body.tags,
                        complete: body.complete,
                        price: body.price
                    },
                },
                {
                    new: true

                }
            )
            res.status(200).send({ result: result, message: "updated", success: true });
        } catch (error) {
            res.send({ error: error.message });
        }

    }

    async deleteOne(req, res) {
        try {
            const result = await models.useHomeModel.findByIdAndRemove(req.params.id)
            res.status(200).send({ result: result, message: "deleted", success: true });
        } catch (error) {
            res.send({ error: error.message });
        }
    }
}
module.exports = new Controller();