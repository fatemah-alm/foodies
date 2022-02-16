const Category = require("../../models/Category");
const Recipe = require("../../models/Recipe");

exports.fetchCategories = async (req, res, next) => {
  try {
    const categories = await Category.find().populate("recipies");
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

exports.categoryCreate = async (req, res, next) => {
  try {
    const newCategory = await Category.create(req.body);
    return res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

//recipies

exports.createRecipies = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    req.body.category = categoryId;
    const newRecipe = await Recipe.create(req.body);

    await Category.findByIdAndUpdate(categoryId, {
      $push: { recipies: newRecipe._id },
    });

    return res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
};
