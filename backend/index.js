const express = require("express");
const app = express();

app.use(express.json());
app.get("/", (req, response) => {
  return response.send("Hello world");
});

app.listen(3333);