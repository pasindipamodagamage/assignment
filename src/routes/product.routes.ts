import {Router} from "express";
import {
    DeleteProduct,
    getAllProducts,
    getProduct,
    saveProduct, UpdateProduct
} from "../controllers/product.controller";

const productRouter:Router = Router();

// handle request
productRouter.get("/all",getAllProducts) //get all
productRouter.post("/save",saveProduct) //save
productRouter.get("/:id",getProduct) //getById
productRouter.put("/update/:id",UpdateProduct) //update
productRouter.delete("/delete/:id",DeleteProduct) //delete


export default productRouter;