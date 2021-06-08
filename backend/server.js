const express = require("express");
const morgan = require("morgan");
const path = require("path");

const routes = require("./server/routes");
const connectDB = require("./server/database/connection");

require("dotenv").config({ path: "../config.env" });

const app = express();

const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan("tiny"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "./assets")));

connectDB();

app.use("/", routes);

app.listen(port, () => {
  console.log(`application running on http://localhost:${port}`);
});
