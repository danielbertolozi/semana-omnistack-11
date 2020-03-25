const routes = require("express").Router();
const controller = require("../controllers/SessionController");

routes.post("/sessions", controller.create);

module.exports = routes;
