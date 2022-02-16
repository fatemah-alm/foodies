const mongooseSlugPlugin = require("mongoose-slug-plugin");
const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema(
  {
    name: String,
    image: String, // emojie instead of image
    quantity: Number,

    // add user
  },
  { timestamps: true }
);

IngredientSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
module.exports = mongoose.model("Ingredient", IngredientSchema);
