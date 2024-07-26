import mongoose from "mongoose"

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MongoDB)
        console.log("Data Connected")
    }catch(error) {
        console.error(`ERROR : ${error.message}`)
        process.exit(1)
    }
}

export default connectDB