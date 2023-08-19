// server.js

import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectToDatabase from "./database/database.js"
import postRoute from "./routes/postRoute.js"

dotenv.config();

const app = express()
const port = process.env.PORT || 3000

connectToDatabase()

app.use(express.json())
app.use(cors())

app.use('/posts', postRoute);

app.listen(port, () => {
    console.log(`Server Listening on Port ${port}`)
})