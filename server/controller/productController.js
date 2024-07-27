import Product from "../models/productModel.js";

const getProduct = (async(req,res) =>{
    const data = await Product.find({})
    res.json(data)
})

const createProduct = (async(req,res) =>{
    const {title, desc, price} = req.body
    if(!title || !desc || !price) {
        res.status(400)
        res.json("Please Fill All Completely")
    }
    const newUser = await Product.create ({title,desc,price})
    res.json(newUser)


})

const updateProduct = (async(req,res) =>{
    const id = req.params.id
    const {title,desc,price} = req.body;
    const data = await Product.findByIdAndUpdate(id, {title,desc,price})
    res.json({data})
})

const deleteProduct = (async(req,res) =>{
    const id = req.params.id
    const deletedData = await Product.findByIdAndDelete(id)
    res.json("Delete Succes")
})

export {getProduct, createProduct, updateProduct, deleteProduct}