const { Router } = require("express");
const courseRouter = Router();

courseRouter.get("/purchase", function (req, res) {});

courseRouter.get("/review", function (req, res) {});
module.exports = {
  courseRouter: courseRouter,
};
