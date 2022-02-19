const mongooseSlugPlugin = require("mongoose-slug-plugin");
const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true },
    image: String, // emojie instead of image
    quantity: Number,
    type: String,

    recipe: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
    // add user
  },
  { timestamps: true }
);

IngredientSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
module.exports = mongoose.model("Ingredient", IngredientSchema);
