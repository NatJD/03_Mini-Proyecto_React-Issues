import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [issues, setIssues] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then((response) => {
        return response.json()
      }).then((results) => {
        console.log(results)
        setIssues(results)
      }).catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <h1>React Issues</h1>
    </>
  )
}

export default App
