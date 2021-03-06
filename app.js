const express = require("express");
const morgan = require("morgan");
const connectDb = require("./database");
const path = require("path");
const { urlencoded } = require("express");
const cors = require("cors");
const categoryRoutes = require("./api/categories/routes");
const recipeRoutes = require("./api/recipies/routes");
const ingredientRoutes = require("./api/ingredients/routes");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use("/api/categories", categoryRoutes);
app.use("/api", recipeRoutes);
app.use("/api/ingredients", ingredientRoutes);

// app.use(path.join(__dirname, "media"));
app.use("/media", express.static(path.join(__dirname, "media")));

//Error handling middleware

morgan("tiny");
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message } || "Internal server error");
});

app.listen(8088);

connectDb();
