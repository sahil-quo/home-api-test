const express = require("express");
const path = require("path");
const getPageData = require("./helper/pages");
const app = express();
const port = 3000;

const URL = "http://18.236.173.27:1048";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.static(path.join(__dirname, "images")));
let fileDir = path.join(__dirname, "images");
app.get("/images/:filename", (req, res) => {
  res.sendFile(`${fileDir}/${req.params.filename}`);
});

app.get("/home/:pageId", (req, res) => {
  const page = parseInt(req.params.pageId);
  const data = getPageData(page, URL);
  if (data) {
    res.status(200).send(data);
    return;
  }
  res.status(404).send();
});

app.listen(port, () => {
  console.log(`Example app listening at ${URL}`);
});
