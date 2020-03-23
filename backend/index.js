const app = require("express")();

app.get("/", (req, response) => {
  return response.send("Hello world");
});

app.listen(3333);