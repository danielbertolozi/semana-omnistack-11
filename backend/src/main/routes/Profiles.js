const routes = require("express").Router();
const controller = require("../controllers/ProfileController");

routes.get("/profile", controller.index);

module.exports = routes;
