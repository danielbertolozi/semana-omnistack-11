const connection = require("../database/Connection");

module.exports = {
  async index(req, response) {
    const ong_id = req.headers.authorization;

    const incidents = await connection("incidents")
      .select("*")
      .where("ong_id", ong_id);

    return response.json(incidents);
  }
};
