const express = require("express");
const ongRoutes = require("./routes/ONGs");
const incidentRoutes = require("./routes/Incidents");
const profileRoutes = require("./routes/Profiles");
const sessionRoutes = require("./routes/Sessions");

const app = express();
app.use(express.json());

app.use(ongRoutes);
app.use(incidentRoutes);
app.use(profileRoutes);
app.use(sessionRoutes);

app.listen(3333);