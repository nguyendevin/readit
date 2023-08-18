// api.js

import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3001"
})

export const getPosts = () => {
    api.get("/posts")
}

export const getPost = (id) => {
    api.get(`/posts/${id}`)
}

export const addPost = (post) => {
    api.post("/posts", post)
}

export const deletePost = (id) => {
    api.delete(`/posts/${id}`)
}

export const patchPost = (id, post) => {
    api.patch(`/posts/${id}`, post)
}

export const addComment = (id, comment) => {
    api.post(`/posts/${id}`, { comment })
}