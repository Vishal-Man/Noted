import cors from "cors"
import express from "express"
import dotenv from "dotenv"

import noteRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import  ratelimiter  from "./middleware/rateLimiter.js"

dotenv.config({ path: "./.env" });
console.log(process.env.MONGO_URI);
const app = express()
const PORT = 5001

//middleware
app.use(cors({
    origin:"http://localhost:5173",
}))
app.use(express.json())
app.use(ratelimiter)

app.use("/api/notes", noteRoutes)

connectDB().then(()=>{
    app.listen(5001, ()=>{
        console.log("Server is running on PORT:", PORT)
    })
})
