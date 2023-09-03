const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("new request incoming");
  return res.json("ok");
});

app.listen(process.env.API_PORT, () => {
  console.log(">>> API up and running");
  console.log(">>> API port is", process.env.API_PORT);
});
