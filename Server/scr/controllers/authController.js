const jwt = require("jsonwebtoken");
const bycrypt = require("bcryptjs");
const User = require("../models/User");
const SECRET_KEY = "myapp@123"


const authController = {

    register: async (req, res) => {
        try {
            const { student_id, name, email, password } = req.body;
            const existing = await User.findByEmail(email)
            if (existing) {

                return res.status(409).json({ message: "email already registered" })
            }
            const hashed = await bycrypt.hash(password,10)
            const user = await User.create({student_id,name,email,password_hash:hashed})
            return res.status(201).json({message:"Account created",userId:user.id})

        } catch (err) {
            return res.status(401).json({ message: err.message })
        }
    },
    homePage: async (req,res)=>{
        return res.json("Course Enrollment")
    },
    login: async(req,res)=>{
        try{
            const {email,password}= req.body;
            const user = await User.findByEmail(email);
            if(!user) return res.status(401).json({message:"User not found"});
            const isValid = await bycrypt.compare(password,user.password)
            if(!isValid) return res.status(401).json({message:"Please enter correct password"});
            const token = await jwt.sign({id:user.id,name:user.name,email:user.email},SECRET_KEY,{expiresIn:"1d"})
            res.status(200).json({data:{token,email,name:user.name}})

        }catch(err){
            return res.status(401).json({message:err.message})
        }
    }
}

module.exports= authController