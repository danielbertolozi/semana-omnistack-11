const express = require("express");
const cors = require("cors");
const ongRoutes = require("./routes/ONGs");
const incidentRoutes = require("./routes/Incidents");
const profileRoutes = require("./routes/Profiles");
const sessionRoutes = require("./routes/Sessions");

const app = express();
app.use(cors());
app.use(express.json());

app.use(ongRoutes);
app.use(incidentRoutes);
app.use(profileRoutes);
app.use(sessionRoutes);

app.listen(3333);