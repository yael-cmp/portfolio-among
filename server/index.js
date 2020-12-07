const path = require("path");
const express = require("express");

const app = express();

app.use("/", express.static(path.resolve(__dirname, "../", "dist")));

app.listen(4000, () => {
  console.log("listening on http://localhost:4000");
});
