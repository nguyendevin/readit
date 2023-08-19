// App.js

import { useEffect } from "react"
import { useDispatch } from "react-redux"

import Form from "./components/Form/Form"
import Post from "./components/Post/Post"
import { getPosts } from "../../actions/postAction"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])
  
  return (
    <div>
      <Form />
      <Posts />
    </div>
  )
}

export default App