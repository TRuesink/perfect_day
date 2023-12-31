const express = require("express");
const router = express.Router();

const { getUser, createUser } = require("../controllers/user.controller");

router.get("/", getUser).post("/", createUser);

module.exports = router;
