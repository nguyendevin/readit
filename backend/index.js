// index.js

import express from "express"
import dotenv from "dotenv"
import connectToDB from "./mongoose.js";

dotenv.config();

const app = express()
const port = process.env.PORT || 3000

connectToDB()

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Server Listening on Port ${port}`)
})