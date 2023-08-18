// postReducer.js

import { combineReducers } from "redux"

const postReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_POSTS":
            return action.payload
        case "GET_POST":
            return state.find((post) => post._id === action.payload._id)
        case "ADD_POST":
            return [...state, action.payload]
        case "DELETE_POST":
            return state.filter((post) => post._id !== action.payload)
        case "PATCH_POST":
            return state.map((post) => (post._id === action.payload._id ? action.payload : post))
        case "ADD_COMMENT":
            return state.map((post) => (post._id === action.payload._id ? action.payload : post))
        default:
            return state
    }
}

export const reducers = combineReducers({ postReducer })