import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    title:String,
    author:String,
    discription:String,
    price:String,
    image:String
},
{ typeKey: '$type' }
)

const bookModel=mongoose.model('bookModel',bookSchema)
export default bookModel