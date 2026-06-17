const express = require("express");
const router = express.Router();

const { getTodo } = require("../controllers/todo.controller");

router.get("/:id", getTodo);

module.exports = router;