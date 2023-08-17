// mongoose.js

import mongoose from "mongoose"

const connectToDB = async () => {
    await mongoose.connect(process.env.URL)
        .then(() => console.log("Connected to MongoDB"))
        .catch((e) => console.log(e.message))
}

export default connectToDB