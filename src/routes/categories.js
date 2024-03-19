import express from "express";
import CategoriesController from "../controllers/categories.js";
const categoriesRouter = express.Router();
const categoriesController = new CategoriesController();

// categoriesRouter.get("/",(req, res) => {
//     res.send("categories");
// });
// categoriesRouter.post("/",(req, res) => {
//     res.send("categories");
// });
// categoriesRouter.get("/:id",(req, res) => {
//     res.send("categories");
// });
// categoriesRouter.put("/:id",(req, res) => {
//     res.send("categories put");
// });
// categoriesRouter.delete("/:id",(req, res) => {
//     res.send("categories delete");
// });

categoriesRouter.get("/", categoriesController.getAllcategori);
categoriesRouter.post("/", categoriesController.createcategori);
categoriesRouter.get("/:id", categoriesController.getcategoriDetail);
categoriesRouter.put("/:id", categoriesController.updateCategori);
categoriesRouter.delete("/:id", categoriesController.deleteCategori);

export default categoriesRouter;