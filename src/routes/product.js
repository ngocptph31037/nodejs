import express from "express";
import ProductController from "../controllers/product.js";
const productRouter = express.Router();
const productController = new ProductController();

// productRouter.get("/",(req, res) => {
//     res.send("product");
// });
// productRouter.post("/",(req, res) => {
//     res.send("product");
// });
// productRouter.get("/:id",(req, res) => {
//     res.send("product");
// });
// productRouter.put("/:id",(req, res) => {
//     res.send("product put");
// });
// productRouter.delete("/:id",(req, res) => {
//     res.send("product delete");
// });

productRouter.get("/", productController.getAllProduct);
productRouter.post("/", productController.createProduct);
productRouter.get("/:id", productController.getProductDetail);
productRouter.put("/:id", productController.updateProduct);
productRouter.delete("/:id", productController.deleteProduct);

export default productRouter;