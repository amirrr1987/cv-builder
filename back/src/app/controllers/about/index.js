class Controller {
    getAllIndex(req, res) {
        res.statusCode = 200;
        res.send({ page: "about" });
    }
}
module.exports = new Controller();