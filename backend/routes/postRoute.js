// postRoute.js

import express from "express"
import { addPost, getPost } from "../controllers/postController.js"

const router = express.Router()

router.get("/", addPost)
router.post("/:id", getPost)

export default router