// Post.jsx

import { useState } from "react"
import { useDispatch } from "react-redux"

import { deletePost, addComment } from "../../../actions/postAction"

const Post = ({ post }) => {
    const [comment, setComment] = useState("") 
    const dispatch = useDispatch()

    const handleDelete = (event) => {
        event.preventDefault()
        dispatch(deletePost(post._id))
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        dispatch(addComment({ id: post._id, comment }))
    }

    return (
        <div>
            <p>{post.content}</p>
            {post.comments.map((comment) => <div>{comment}</div>)}
            <button type="button" onClick={handleDelete}>delete</button>
            <form onSubmit={handleSubmit}>
                <input
                    value={comment}
                    type="text"
                    onChange={handleCommentChange}
                />
                <button type="submit">
                    comment
                </button>
            </form>
        </div>
    )
}

export default Post