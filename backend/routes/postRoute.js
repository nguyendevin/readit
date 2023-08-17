// postRoute.js

import express from "express"
import {
    getPosts, getPost, addPost, deletePost, patchPost, addComment
} from "../controllers/postController.js"

const router = express.Router()

router.get("/:id", getPost)
router.get("/", getPosts)
router.post("/", addPost)
router.delete("/:id", deletePost)
router.patch("/:id", patchPost)
router.post("/:id", addComment)

export default router