import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
    title:{type:String,required:true},
    content:{type:String},
    category:{type:String},
    price:{type:Number},
    type:{type:String},
},
{
    timestamps:true,
    versionKey:false
});

const Product = mongoose.model('products',productSchema);

export default Product;