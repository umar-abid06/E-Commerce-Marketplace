const express = require("express");
const registerRouter = require("./auth/register/register-router");

const api = express.Router();

// api.use("/planets", planetsRouter);

api.use("/auth/register", registerRouter);

module.exports = api;
