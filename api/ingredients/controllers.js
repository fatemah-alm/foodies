const Ingredient = require("../../models/Ingredient");

exports.fetchIngredient = async (req, res, next) => {
  try {
    const ingredients = await Ingredient.find();
    res.json(ingredients);
  } catch (error) {
    next(error);
  }
};
