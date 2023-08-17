// database.js

import mongoose from "mongoose"

const connectToDatabase = async () => {
    await mongoose.connect(process.env.URL)
        .then(() => console.log("Connected to Database"))
        .catch((e) => console.log(e.message))
}

export default connectToDatabase