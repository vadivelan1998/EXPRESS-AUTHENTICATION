const express=require("express")
const app=express()
const connect=require("./configs/db")
const userController=require("./controllers/user.controller")
const {register,login}=require("./controllers/auth.controller")
const postController=require("./controllers/post.controller")
const { body, validationResult } = require("express-validator");

app.use(express.json())

app.use("/users",userController)
app.use("/posts",postController)

app.post("/register",register)
app.post("/login", login);

app.listen(6000,async()=>{
    try {
            await connect();
            console.log("listening on port 6000");
        
    } catch (error) {
        console.log(error)
    }

})