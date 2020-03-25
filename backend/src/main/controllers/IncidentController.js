const connection = require("../database/Connection");

module.exports = {
  async create(req, response) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id
    });

    return response.json({ id });
  },
  async index(req, response) {
    const result = await connection("incidents").select("*");
    return response.json(result);
  },
  async delete(req, response) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await connection("incidents")
      .select("ong_id")
      .where("id", id)
      .first();

    if (incident.ong_id !== ong_id) {
      return response.status(401).json({ error: "Operation not permitted" });
    }

    await connection("incidents")
      .where("id", id)
      .delete();
    
    return response.status(204).send();
  }
};
