const express = require("express");
const app = express();
const connectDb = require("./database");
const categoryRoutes = require("./api/categories/routes");
app.use(express.json());

app.use("/api/categories", categoryRoutes);
//Error handling middleware

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message } || "Internal server error");
});

app.listen(8088 || 5000);

connectDb();
