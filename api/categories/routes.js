const express = require("express");

const { fetchCategories } = require("./controllers");

const router = express.Router();

router.get("/", fetchCategories);

module.exports = router;
