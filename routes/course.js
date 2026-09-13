const { Router } = require("express");
const courseRouter = Router();
const { courseModel } = require("../db");
courseRouter.get("/purchase", function (req, res) {});

courseRouter.get("/review", function (req, res) {});
module.exports = {
  courseRouter: courseRouter,
};
