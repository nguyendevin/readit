// App.js

import { useEffect } from "react"
import { useDispatch } from "react-redux"

import Form from "./components/Form/Form"
import Posts from "./components/Posts/Posts"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])
  
  return (
    <div>
      <p>Hello, World!</p>
      <Form />
    </div>
  )
}

export default App