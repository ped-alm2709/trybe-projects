const express = require("express");

const app = express();

app.get("/", (_req, res) => res.status(200));

module.exports = app;
