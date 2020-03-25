const express = require("express");
const ongRoutes = require("./routes/ONGs");
const incidentRoutes = require("./routes/Incidents");
const app = express();
app.use(express.json());

app.use(ongRoutes);
app.use(incidentRoutes);

app.listen(3333);