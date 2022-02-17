const mongooseSlugPlugin = require("mongoose-slug-plugin");
const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    description: String,
    recipies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
  },
  { timestamps: true }
);

CategorySchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
module.exports = mongoose.model("Category", CategorySchema);
