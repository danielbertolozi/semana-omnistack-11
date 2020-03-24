const routes = require("express").Router();

routes.get("/", (req, response) => {
  return response.json({
    content: "Hello world"
  });
});

module.exports = routes;