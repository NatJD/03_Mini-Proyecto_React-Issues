import React from 'react'

const Search = ({ handleSearchChange }) => {
  return (
    <div className='search-container'>

      <input
        type='text'
        className='search-input'
        placeholder='Buscar...'
        onChange={handleSearchChange}
      />
    </div>
  )
}

export default Search
