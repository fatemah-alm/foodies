const express = require("express");

const {
  fetchCategories,
  categoryCreate,
  createRecipies,
} = require("./controllers");

const router = express.Router();

router.get("/", fetchCategories);
router.post("/", categoryCreate);
router.post("/:categoryId/recipies", createRecipies);

module.exports = router;
