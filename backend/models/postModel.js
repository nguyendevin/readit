// postModel.js

import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    content: String
})

const Post = mongoose.model("Post", postSchema)

export default Post