// postController.js

import express from "express"
import Post from "../models/postModel.js"

const router = express.Router()

export const getPosts = async (req, res) => {
    const posts = await Post.find()
    res.json(posts)
}

export const getPost = async (req, res) => {
    const { id } = req.params
    const post = await Post.findById(id)
    res.json(post)
}

export const addPost = async (req, res) => {
    const { content } = req.body
    const newPost = new Post({ content })
    await newPost.save()
    res.json(newPost)
}

export const deletePost = async (req, res) => {
    const { id } = req.params
    await Post.findByIdAndRemove(id)
    res.json({ message: `Deleted Post ${id}` })
}

export const patchPost = async (req, res) => {
    const { id } = req.params
    const { content } = req.body
    const patchedPost = { content, _id: id }
    await Post.findByIdAndUpdate(id, patchedPost, { new: true })
    res.json(patchedPost)
}

export default router