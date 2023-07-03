import React, { useEffect, useState } from 'react'
import './App.css'
import ListIssues from './components/ListIssues'
import Search from './components/Search'

const App = () => {
  const [issues, setIssues] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredIssues = issues.filter((issue) => {
    return issue.title.toLowerCase().includes(searchTerm.toLowerCase())
  })

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
    <div>
      <h1 className='title'>React Issues</h1>
      <Search handleSearchChange={handleSearch} />
      <ListIssues issues={filteredIssues} />
    </div>
  )
}

export default App
