// postRoute.js

import express from "express"
import {
    getPosts, getPost, addPost, deletePost, patchPost
} from "../controllers/postController.js"

const router = express.Router()

router.get("/:id", getPost)
router.get("/", getPosts)
router.post("/", addPost)
router.delete("/:id", deletePost)
router.patch("/:id", patchPost)

export default router