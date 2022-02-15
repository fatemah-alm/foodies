const express = require("express");

const { fetchCategories, categoryCreate } = require("./controllers");

const router = express.Router();

router.get("/", fetchCategories);
router.post("/", categoryCreate);

module.exports = router;
