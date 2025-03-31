const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  loginUser,
} = require("../controllers/auth.controller.js");

router.get("/", getUsers);

router.post("/register", createUser);

router.post("/login", loginUser);

module.exports = router;
