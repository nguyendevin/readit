// Posts.jsx

import { useSelector } from "react-redux"

import Post from "./Post/Post"

const Posts = () => {
    const posts = useSelector((state) => state.postReducer)

    console.log(posts)

    return (
        !posts ? <></> :
        <div>
            {posts.map((post) => (
                <Post post={post} />
            ))}
        </div>
    )
}

export default Posts