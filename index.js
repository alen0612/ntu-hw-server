const express = require("express");
const app = express();
const courseList = require("./course_list.json");
const port = process.env.PORT || 3001;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-Headers", "accessToken, Content-Type");
  next();
});

app.get("/course", (req, res) => {
  res.json({ courseList });
});

app.listen(port, () => {
  console.log("-----------------------------------");
  console.log("|                                 |");
  console.log("| Server is running on port 3001! |");
  console.log("|                                 |");
  console.log("-----------------------------------");
});
