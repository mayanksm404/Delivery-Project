import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import validator from "validator"

//login user
const loginUser = async (req,res) => {
    const {email,password}=req.body;
    try {
        const user=await userModel.findOne({email});
        if (!user) {
            return res.json({
                success:false,
                message:"User doesnot exist"
            })
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if (!isMatch) {
            return res.json({
                success:false,
                message:"Invalid Crendential"
            })
        }
        const token=createToken(user._id);
        res.json({
            success:true,
            token
        })
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:"error"
        })
    }
}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user
const registerUser = async (req,res) => {
    const {name,password,email} = req.body;
    try {
        const exists=await userModel.findOne({email});
        if(exists){
            return res.json({
                success:false,
                message:"User already registered"
            })
        }
        if (!validator.isEmail(email)) {
            return res.json({
                success:false,
                message:"please enter a valid email"
            })
        }
        if (password.length<8) {
            return res.json({
                success:false,
                message:"please enter a strong password"
            })
        }

        //hasing user password
        const salt=await bcrypt.genSalt(10)
        const hassedPassword = await bcrypt.hash(password,salt)

        const newUser=new userModel({
            name:name,
            email:email,
            password:hassedPassword
        })

        const user = await newUser.save()
        const token=createToken(user._id)
        res.json({
            success: true,
            token
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message: "Error"
        })
    }
}

export {loginUser,registerUser}