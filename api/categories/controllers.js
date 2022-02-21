const Category = require("../../models/Category");
const Recipe = require("../../models/Recipe");
const Ingredient = require("../../models/Ingredient");

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
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    const newCategory = await Category.create(req.body);
    return res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

//recipies

exports.createRecipies = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    const { categoryId } = req.params;
    req.body.category = categoryId;
    const newRecipe = await Recipe.create(req.body);

    await Category.findByIdAndUpdate(categoryId, {
      $push: { recipies: newRecipe._id },
    });
    console.log(req.body.ing);
    req.body.ing.split(",").forEach(async (i) => {
      console.log(i);
      const foundIngredientId = await Ingredient.findOne({ name: i });
      // console.log(foundIngredientId);
      if (foundIngredientId) {
        await Recipe.findByIdAndUpdate(ingredientId, {
          $push: { ingredients: foundIngredientId._id },
        });

        await Ingredient.findByIdAndUpdate(foundIngredientId._id, {
          $push: { recipe: newRecipe._id },
        });
      }
    });

    // await Recipe.findByIdAndUpdate(ingredientId, {
    //   $push: { ingredients: ingredientId },
    // });

    await Ingredient.findByIdAndUpdate(newRecipe._id, {
      $push: { recipe: newRecipe._id },
    });

    return res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
};

exports.categoryDelete = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const foundCategory = await Category.findById(categoryId);
    if (foundCategory) {
      foundCategory.remove();
      return res.status(204).end();
    } else {
      const err = new Error("category Not Found!");
      err.status = 404;
      next(err);
    }
  } catch (error) {
    next(error);
  }
};
