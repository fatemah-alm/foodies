const mongooseSlugPlugin = require("mongoose-slug-plugin");
const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    description: String,
    cousine: String,
    calories: Number,
    cookTime: Number,
    prepTime: Number,
    createdBy: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" }],
    // user: String,
  },
  { timestamps: true }
);

RecipeSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
module.exports = mongoose.model("Recipe", RecipeSchema);
