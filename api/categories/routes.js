const express = require("express");

const {
  fetchCategories,
  categoryCreate,
  createRecipies,
  categoryDelete,
} = require("./controllers");

const router = express.Router();

router.get("/", fetchCategories);
router.post("/", categoryCreate);
router.delete("/:categoryId", categoryDelete);
router.post("/:categoryId/recipies", createRecipies);

module.exports = router;
