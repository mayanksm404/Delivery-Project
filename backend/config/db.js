import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mayanksm404:nS4SFV4WL0jfFozN@cluster0.zwwdvbr.mongodb.net/food-delivery').then(()=>console.log("db connected"))
}