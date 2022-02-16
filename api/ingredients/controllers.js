const Ingredient = require("../../models/Ingredient");

exports.fetchIngredient = async (req, res, next) => {
  try {
    const ingredients = await Ingredient.find();
    res.json(ingredients);
  } catch (error) {
    next(error);
  }
};

exports.createIngredient = async (req, res, next) => {
  try {
    //   const { recipeId } = req.params;

    //   const newIngredient = await Ingredient.create(req.body);
    //   console.log(newIngredient, "this isit");
    //   await Recipe.updateMany(recipeId, {
    //     $push: { ingredients: newIngredient._id },
    //   });
    const newIngredient = await Ingredient.create(req.body);
    return res.status(201).json(newIngredient);
  } catch (error) {
    next(error);
  }
};
