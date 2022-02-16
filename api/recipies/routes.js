const express = require("express");

const {
  fetchRecipies,
  fetchAllRecipies,
  fetchRecipe,
  createIngredient,
} = require("./controllers");

const router = express.Router();

router.get("/categories/:categoryId/recipies", fetchRecipies); //fetch recipies inside a cetegory
router.get("/categories/:categoryId/recipies/:recipeId", fetchRecipe); //fetch recipies inside a cetegory
router.get("/recipies", fetchAllRecipies); // fetch all

//ingredients
router.post("/ingredients/:recipeId", createIngredient);

module.exports = router;
