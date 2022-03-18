const User=require("../models/user.model")
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
require("dotenv").config();
console.log(process.env);

const generateToken=(user)=>{
return jwt.sign({ user }, process.env.KEY);
}

const register=async(req,res)=>{
    try {
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //   return res.status(400).send({ errors: errors.array() });
        // }
        let user=await User.findOne({email:req.body.email})
        if(user)
        return res.status(400).send("eamail already registered")

        user=await User.create(req.body)
        const token =generateToken(user)
        

         console.log(token)
        
        return res.status(200).send({user,token})

    } catch (err) {
        res.status(400).send({ message: err.message });
    }
}
const login=async(req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email})
        if(!user){
            return res.status(400).send("wrong email or password ")
        }
        const match=user.checkPassword(req.body.password)
        if(!match)
        {
            return res.status(400).send("wrong email or password ");
        }

        const token = generateToken(user);
        return res.status(200).send({ user, token });
        
    } catch (error) {
        
    }res.status(400).send(error.message)
}


module.exports={register,login}