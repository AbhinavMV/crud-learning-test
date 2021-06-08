const express = require("express");

const controller = require("../controller/controller");
const { getUsers, userAddForm } = require("../services/userList");

const router = express.Router();

router.get("/users", getUsers);

router.get("/add-user", userAddForm);

router.get("/api/users", controller.find);

router.post("/api/users", controller.create);

router.put("/api/users/:id", controller.update);

router.delete("/api/users/:id", controller.delete);

module.exports = router;
