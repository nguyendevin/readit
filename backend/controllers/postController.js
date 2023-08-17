// postController.js

import express from "express"
import Post from "../models/postModel.js"

const router = express.Router()

export const addPost = async (req, res) => {
    const { content } = req.body
    const newPost = new Post({ content })
    await newPost.save()
    res.json(newPost)
}

export const getPost = async (req, res) => {
    const { id } = req.params
    const post = await Post.findById(id)
    res.json(post)
}

export default router