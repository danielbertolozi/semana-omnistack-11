const routes = require("express").Router();
const controller = require("../controllers/OngController");

routes.get("/ongs", controller.index);
routes.post("/ongs", controller.create);

module.exports = routes;
