const express = require("express") ;
const Product = require("./products.schema") ;

const app = express.Router() ;
app.use(express.json()) ;


app.get("/sort/desc", async(req, res)=>{
    try{
        let output = await Product.find({},).sort({cost: -1});
        res.send(output);
   }
   catch(err){
       res.status(500).send(err.message);
   }
})


app.get("/", async(req, res)=>{
    try{
        let output = await Product.find();
        res.send(output);
   }
   catch(err){
       res.status(500).send(err.message);
   }
})


app.get("/sort/asc", async(req, res)=>{
    try{
        let output = await Product.find({},).sort({cost: 1});
        res.send(output);
   }
   catch(err){
       res.status(500).send(err.message);
   }
})


app.get("/sort/desc", async(req, res)=>{
    try{
        let output = await Product.find({},).sort({cost: -1});
        res.send(output);
   }
   catch(err){
       res.status(500).send(err.message);
   }
})

app.get("/:id", async(req, res)=>{
    try{
        let id = req.params.id ;
        let output = await Product.find({"id":id});
        res.send(output);
   }
   catch(err){
       res.status(500).send(err.message);
   }
})

app.post("/", async(req, res)=>{
    try{
        let product = req.body
        let p = await Product.insertMany(product)
        res.send(product);
   }
   catch(err){
       res.status(500).send(err.message);
   }
})

app.delete("/:id", async(req, res)=>{
    try{
        let id = req.params.id;
        let product = await Product.deleteOne({"_id":id})
        res.send(product);
   }
   catch(err){
       res.status(500).send(err.message);
   }
})

app.patch("/:id", async (req,res)=>{
    try{
        let id = req.params.id;
        let update = await Product.updateOne({"_id":id},{$set:{...req.body}});
        res.status(200).send("Task Details Updated Successfully!");
    }
    catch(err){
        res.status(500).send(err.message);
    }
    
})

module.exports =app; 