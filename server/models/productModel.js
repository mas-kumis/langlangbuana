import mongoose from 'mongoose'

const ProductSchema = mongoose.Schema({
    title : String,
    desc : String,
    price : Number
}, { timestamps:true})


const Product = mongoose.model('Product', ProductSchema)

export default Product