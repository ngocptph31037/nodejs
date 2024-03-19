import moviesRouter from "./movies.js";
import categoriesRouter from "./categories.js";
import productRouter from "./product.js";

export default function routes(app) {
    app.get('/',(req,res)=>{
        res.send("đây là trang home")
    })
  app.use("/movies", moviesRouter);
  app.use("/categories", categoriesRouter); 
  app.use("/product", productRouter); 
}