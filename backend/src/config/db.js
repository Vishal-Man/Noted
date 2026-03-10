import mongoose from "mongoose"
import dns from "node:dns/promises"
import dotenv from "dotenv"

dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config()
console.log(process.env.MONGO_URI);

export const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected successfully")
    } catch (error){
        console.error("Error in mongoDB",error)
        process.exit(1)
    }
    

}