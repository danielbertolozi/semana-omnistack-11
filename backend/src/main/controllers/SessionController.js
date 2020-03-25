const connection = require("../database/Connection");

module.exports = {
  async create(req, response) {
    const { id } = req.body;

    const ong = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();
    if (!ong) {
      return response.status(400).json({ error: "No ONG found with this ID." });
    }
    return response.json(ong);
  }
};
