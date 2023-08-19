// Form.jsx

import { useState } from "react"
import { useDispatch } from "react-redux"

import { addPost } from "../../actions/postAction"

const Form = () => {
    const [content, setContent] = useState("")
    const dispatch = useDispatch()

    const handleContentChange = (event) => {
        setContent(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventFault()

        dispatch(addPost({ content }))
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={content}
                    type="text"
                    onChange={handleContentChange}
                />
                <button type="submit">
                    submit
                </button>
            </form>
        </div>
    )
}

export default Form