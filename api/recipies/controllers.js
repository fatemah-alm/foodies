const req = require("express/lib/request");
const Recipe = require("../../models/Recipe");
// fetch a single recipie
exports.fetchRecipe = async (req, res, next) => {
  try {
    const { recipeId } = req.params;

    const recipe = await Recipe.findById(recipeId);
    if (recipe) res.json(recipe);
    else {
      const err = new Error("Recipe Not Found!");
      err.status = 404;
      next(err);
    }
  } catch (error) {
    next(error);
  }
};

// fetch recipies inside a certain category
exports.fetchRecipies = async (req, res, next) => {
  try {
    const recipies = await Recipe.find().populate("category");
    res.json(recipies);
  } catch (error) {
    next(error);
  }
};

exports.recipeDelete = async (req, res, next) => {
  try {
    const { recipeId } = req.params;
    const foundRecipe = await Recipe.findById(recipeId);
    if (foundRecipe) {
      foundRecipe.remove();
      return res.status(204).end();
    } else {
      const err = new Error("recipe Not Found!");
      err.status = 404;
      next(err);
    }
  } catch (error) {
    next(error);
  }
};
// fetch all recipies

exports.fetchAllRecipies = async (req, res, next) => {
  try {
    const recipies = await Recipe.find().populate("category");
    console.log(recipies);
    res.json(recipies);
  } catch (error) {
    next(error);
  }
};
