import express from 'express'
import {createCategory, getAllCategories, putCategoryById, deleteCategoryById, getCategoruyById} from '../controller/categoryController.js'
import { authenticate, authorizedAdmin } from '../middleware/authMiddleware.js'
const router = express.Router()

router.post('/',  authenticate, authorizedAdmin, createCategory)
router.get('/',authenticate, authorizedAdmin, getAllCategories)
router.get('/:categoryId',authenticate, authorizedAdmin, getCategoruyById)
router.put('/:categoryId', authenticate, authorizedAdmin, putCategoryById)
router.delete('/:categoryId', authenticate, authorizedAdmin, deleteCategoryById)


export default router