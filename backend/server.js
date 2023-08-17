// server.js

import express from "express"
import dotenv from "dotenv"
import connectToDatabase from "./database/database.js"

dotenv.config();

const app = express()
const port = process.env.PORT || 3000

connectToDatabase()

app.listen(port, () => {
    console.log(`Server Listening on Port ${port}`)
})