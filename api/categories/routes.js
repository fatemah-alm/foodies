const express = require("express");

const {
  fetchCategories,
  categoryCreate,
  createRecipies,
  categoryDelete,
} = require("./controllers");
const upload = require("../../middlewares/multer");

const router = express.Router();

router.get("/", fetchCategories);
router.post("/", upload.single("image"), categoryCreate);
router.delete("/:categoryId", categoryDelete);
router.post("/:categoryId/recipies", createRecipies);

module.exports = router;
