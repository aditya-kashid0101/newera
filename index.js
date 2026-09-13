const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected !"));
app.listen(process.env.PORT);
