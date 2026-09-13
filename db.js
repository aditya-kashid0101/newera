const mongoose = require("mongoose");
mongoose.connect("").then(() => console.log("Connected !"));
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});
const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const purchaseSchema = new Schema({
  courseId: ObjectId,
  userId: ObjectId,
});
const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  CreatorId: ObjectId,
});
const userModel = mongoose.Model("user", userSchema);
const adminModel = mongoose.Model("admin", adminSchema);
const purchaseModel = mongoose.Model("purchase", purchaseSchema);
const courseModel = mongoose.Model("course", courseSchema);
module.exports = {
  userModel,
  adminModel,
  purchaseModel,
  courseModel,
};
