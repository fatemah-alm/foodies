const req = require("express/lib/request");
const Recipe = require("../../models/Recipe");
const Ingredient = require("../../models/Ingredient");
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
// fetch all recipies

exports.fetchAllRecipies = async (req, res, next) => {
  try {
    const recipies = await Recipe.find().populate("category");
    res.json(recipies);
  } catch (error) {
    next(error);
  }
};

exports.createIngredient = async (req, res, next) => {
  try {
    const { recipeId } = req.params;

    const newIngredient = await Ingredient.create(req.body);
    console.log(newIngredient, "this isit");
    await Recipe.findByIdAndUpdate(recipeId, {
      $push: { ingredients: newIngredient._id },
    });

    return res.status(201).json(newIngredient);
  } catch (error) {
    next(error);
  }
};
