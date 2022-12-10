const mongoose = require("mongoose");

const productsSchema= new mongoose.Schema({
    id : {  type:Number },
    img : {  type:String },
    title : {  type:String },
    star : {  type:String },
    cost : {  type: Number },
    cutcost : {  type: Number },
    save : {  type:String }
})
const Product = mongoose.model("product",productsSchema);
module.exports = Product ;