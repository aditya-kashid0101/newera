const express = require("express");
const user = require("./user");
const app= express(); 
const{ userRouter } = require("user")

app.listen(3000);
