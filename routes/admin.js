const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
adminRouter.post("/singup", function (req, res) {});
adminRouter.post("/signin", function (req, res) {});
module.exports = {
  adminRouter: adminRouter,
};
