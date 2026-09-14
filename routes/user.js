const { Router } = require("express");
const userRouter = Router();
const { userModel } = require("../db");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const saltRounds = 5;
const userSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
  firstname: z.string(),
  lastname: z.string(),
});

userRouter.post("/signup", async function (req, res) {
  const result = userSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({
      errors: result.error.issues[0].message,
    });
    return;
  }
  const { email, password, firstname, lastname } = result.data;
  const hashedpassword = await bcrypt.hash(password, saltRounds);
  try {
    await userModel.create({
      email,
      password: hashedpassword,
      firstname,
      lastname,
    });
    return res.status(201).json({
      message: "User Created Successfully",
    });
  } catch (e) {
    if (e.code === 11000) {
      return res.status(409).json({
        message: "Email already exists",
      });
    }
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
});

userRouter.post("/signin", function (req, res) {});
userRouter.post("/purchases", function (req, res) {});
module.exports = {
  userRouter: userRouter,
};
