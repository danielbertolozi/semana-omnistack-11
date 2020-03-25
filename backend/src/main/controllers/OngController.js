const crypto = require("crypto");
const connection = require("../database/Connection");

module.exports = {
  async index(req, response) {
    const ongs = await connection("ongs").select("*");
    return response.json(ongs);
  },
  async create(req, response) {
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
  }
};
