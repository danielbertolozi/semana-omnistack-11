const routes = require("express").Router();
const controller = require("../controllers/IncidentController");

routes.get("/incidents", controller.index);
routes.post("/incidents", controller.create);
routes.delete("/incidents/:id", controller.delete);

module.exports = routes;
