const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();
const application = express();
const port = process.env.PORT || 5000;
require("./db");

application.set("port", port);
application.use(morgan("dev"));
application.use(cors());
application.use(express.json());
application.use(express.urlencoded({ extended: true }));
application.use(express.static("public"));

application.get("/", (req, res) => {
  res.send("Initial server API");
});

application.listen(application.get("port"), () => {
  console.log("Server running on: http://127.0.0.1:" + application.get("port"));
});
