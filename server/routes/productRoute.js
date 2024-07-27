import express from "express";
import { getProduct,createProduct, updateProduct, deleteProduct } from "../controller/productController.js";

const router = express.Router()

router.get('/', getProduct)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router