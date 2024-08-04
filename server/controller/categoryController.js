import asyncHandler from 'express-async-handler'
import Category from '../models/categoryModel.js'

const createCategory = asyncHandler(async (req, res) => {
    try{
        const {name} = req.body
        const existingCategory = await Category.findOne({name})
        if (existingCategory) {
            res.status(400).json({message : 'category already exists'})
        }
        const category = await Category.create({name})
        res.status(201).json({message : 'category created', category})
    } catch (error) {
        res.status(400).json({message : error.message})
    }
})

const getAllCategories = asyncHandler(async (req, res) => {
    const data = await Category.find()
    res.status(200).json(data)
})

const putCategoryById = asyncHandler(async (req, res) => {
    try{
        const {name} = req.body
        const {categoryId} = req.params
        const category = await Category.findById({ _id: categoryId })
        if ( !category ) {
            res.status(400).json({message : 'category not found'})
        }
        category.name = name
        await category.save()
        res.status(200).json({message : 'category updated', category})

    }catch(error){
        res.status(400).json({message : error.message})
    }
})

const deleteCategoryById = asyncHandler(async (req, res) => {
    try{
        const {categoryId} = req.params
        const category = await Category.findById({ _id: categoryId })
        if ( !category ) {
            res.status(400).json({message : 'category not found'})
        }
        await category.deleteOne()
        res.status(200).json({message : 'category deleted'})
    }catch(error){
        res.status(400).json({message : error.message})
    }
})

const getCategoruyById = asyncHandler(async (req, res) => {
    const {categoryId} = req.params
    const category = await Category.findById({ _id: categoryId })
    if ( !category ) {
        res.status(400).json({message : 'category not found'})
    }
    res.status(200).json(category)
})

export {createCategory, getAllCategories, putCategoryById, deleteCategoryById, getCategoruyById} 