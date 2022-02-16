const express = require("express");

const { fetchIngredient, createIngredient } = require("./controllers");

const router = express.Router();

router.get("/", fetchIngredient);
//ingredients
router.post("/", createIngredient);

module.exports = router;
