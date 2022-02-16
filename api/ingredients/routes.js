const express = require("express");

const { fetchIngredient } = require("./controllers");

const router = express.Router();

router.get("/", fetchIngredient);

module.exports = router;
