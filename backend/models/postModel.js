// postModel.js

import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    content: String,
    comments: [String]
})

const Post = mongoose.model("Post", postSchema)

export default Post