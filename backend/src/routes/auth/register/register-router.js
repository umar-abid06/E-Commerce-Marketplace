const express = require("express");
const { httpGetAllUsers, httpVerifyUser } = require("./register-controller");

const registerRouter = express.Router();

registerRouter.post("/", httpGetAllUsers);
registerRouter.get("/verify/:userId/:uniqueString/", httpVerifyUser);

module.exports = registerRouter;
