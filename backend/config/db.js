import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://kumar:kumar2805@cluster0.3ui5pha.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}