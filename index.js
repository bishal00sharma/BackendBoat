const express = require("express") ;
const cors = require("cors") ;
const  mongoose  = require("mongoose");
const jwt =require("jsonwebtoken");
const MAIN_KEY ="boat-api"

const app = express() ;
app.use(express.json());
app.use(cors());

const cartRouter = require("./fearures/carts/cart.router");
const productRouter = require("./fearures/products/products.router");
const userRouter = require("./fearures/user/user.router");


app.use("/products", verifyToken ,productRouter);
app.use("/carts", verifyToken , cartRouter);
app.use("/user",userRouter);

app.get("/", async(req, res)=>{
    try{
        res.send("Boat API");
     }
   catch(err){
       res.status(500).send(err.message);
   }
})

app.listen("8080",  async()=>{
     await mongoose.connect("mongodb+srv://boat:boat@cluster0.9uowopi.mongodb.net/boatClone")
    console.log(`Listening on http://localhost:8080`);

})


function verifyToken(req,res,next) {
    let token = req.headers[`authorization`];
    if(token){
        token = token.split(" ")[1] ;
        console.log(token);
        jwt.verify(token, MAIN_KEY ,(err, valid) => {
            if(err){
                res.send( {result: "Please provide valid token"})
            }
            else{
                next()
            }
        })
    
        
    }
    else{
        res.send({ result:" Please add token with header"})
    }
}