const { Router } = require("express");
const courseRouter = Router();

courseRouter.get("/", function (req, res) {});

courseRouter.post("/", function (req, res) {});
module.exports = {
  courseRouter: courseRouter,
};
