// postAction.js

import * as api from "../api/api.js"

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.getPosts()
        dispatch({ type: "GET_POSTS", payload: data })
    } catch (e) {
        console.log(e.message)
    }
}

export const getPost = (id) => async (dispatch) => {
    try {
        const { data } = await api.getPost(id)
        dispatch({ type: "GET_POST", payload: data })
    } catch (e) {
        console.log(e.message)
    }
}

export const addPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.addPost(post)
        dispatch({ type: "ADD_POST", payload: data })
    } catch (e) {
        console.log(e.message)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({ type: "DELETE_POST", payload: id })
    } catch (e) {
        console.log(e.message)
    }
}

export const patchPost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.patchPost(id, post)
        dispatch({ type: "PATCH_POST", payload: data })
    } catch (e) {
        console.log(e.message)
    }
}

export const addComment = (id, comment) => async (dispatch) => {
    try {
        const { data } = await api.addComment(id, comment)
        dispatch({ type: "ADD_COMMENT", payload: data })
    } catch (e) {
        console.log(e.message)
    }
}