const express = require("express");
const app = express();

const add_number = (req, res, next) => {
  const { num1, num2 } = req.body;
  console.log(num1, num2);
  res.send(num1 + num2);
};
app.get("/", add_number);

module.exports = {
  add_number,
  app,
};
