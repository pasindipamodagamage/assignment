import {Request,Response} from "express";
import * as productService from '../service/product.service'

export const getAllProducts = (req:Request,res:Response) => {
    try{
        const product = productService.getAllProducts();
        res.status(200).json(product)
    }catch (error){
        console.error(error);
        res.status(500).json({
            error: 'Something went wrong!!'
        });
    }
}

export const saveProduct = (req:Request,res:Response) => {
    try{
        const newProduct = req.body;
        const validationError = productService.validateProduct(newProduct);

        if(validationError){
            res.status(400).json({error : validationError})
            return
        }
        const saveProduct = productService.saveProduct(newProduct)
        res.status(201).json(saveProduct);

    }catch (error){
        console.error(error);
        res.status(500).json({
            error: 'Something went wrong!!'
        });
    }
}

export const getProduct = (req:Request,res:Response) => {
    const productId = parseInt(req.params.id);
    if(isNaN(productId)){
        res.status(400).json({
            error: 'invalid product id'
        });
        return;
    }
    const product = productService.getProductById(productId);
    if(!product){
        res.status(404).json({
            error: 'Product not found'
        })
        return;
    }
    res.status(200).json(product)
}

export const UpdateProduct = (req:Request,res:Response) => {
    const productId = parseInt(req.params.id);
    if(isNaN(productId)){
        res.status(400).json({
            error: 'invalid product id'
        });
        return;
    }
    const  updatedData = req.body;
    const updatedProduct = productService.updateProduct(productId,updatedData);
    if (!updatedProduct){
        res.status(404).json({
            error:'product not found'
        });
        return;
    }
    res.status(200).json(updatedProduct)
}

export const DeleteProduct = (req:Request,res:Response) => {
    const productId = parseInt(req.params.id);
    if(isNaN(productId)){
        res.status(400).json({
            error: 'invalid product id'
        });
        return;
    }
    const deleteProduct =  productService.deleteProduct(productId)
    if (!deleteProduct){
        res.status(404).json({
            error:'Product not found'
        });
        return;
    }
    res.status(200).json({
        message:'Product deleted successfully'
    })
}