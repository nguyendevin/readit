// postController.js

import express from "express"
import Post from "../models/postModel.js"

const router = express.Router()

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (e) {
        res.json({ message: e.message })
    }
}

export const getPost = async (req, res) => {
    try {
        const { id } = req.params
        const post = await Post.findById(id)
        res.json(post)
    } catch (e) {
        res.json({ message: e.message })
    }
}

export const addPost = async (req, res) => {
    try {
        const { content } = req.body
        const newPost = new Post({ content })
        await newPost.save()
        res.json(newPost)
    } catch (e) {
        res.json({ message: e.message })
    }
}

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params
        await Post.findByIdAndRemove(id)
        res.json({ message: `Deleted Post ${id}` })
    } catch (e) {
        res.json({ message: e.message })
    }
}

export const patchPost = async (req, res) => {
    try {
        const { id } = req.params
        const { content } = req.body
        const patchedPost = { content, _id: id }
        await Post.findByIdAndUpdate(id, patchedPost, { new: true })
        res.json(patchedPost)
    } catch (e) {
        res.json({ message: e.message })
    }
}

export const addComment = async (req, res) => {
    try {
        const { id } = req.params
        const { comment } = req.body
        const post = await Post.findById(id)
        post.comments.push(comment)
        const patchedPost = await Post.findByIdAndUpdate(id, post, { new: true })
        res.json(patchedPost)
    } catch (e) {
        res.json({ message: e.message })
    }
}

export default router