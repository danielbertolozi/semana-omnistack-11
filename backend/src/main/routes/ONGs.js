const routes = require("express").Router();
const crypto = require("crypto");
const connection = require("../database/Connection");

routes.get("/ongs", async (req, response) => {
  const ongs = await connection("ongs").select("*");
  return response.json(ongs);
});

routes.post("/ongs", async (req, response) => {
  const { name, email, whatsapp, city, uf } = req.body;
  const id = crypto.randomBytes(4).toString("HEX");

  await connection("ongs").insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf
  });
  return response.json({ id });
});

module.exports = routes;
