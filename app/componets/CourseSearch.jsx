'use client'
import { useState } from 'react'

const CourseSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch(`/api/courses/search?query=${query}`)
    const courses = await res.json()
    getSearchResults(courses)
  }

  return (
    <form onSubmit={handleSubmit} className='search-form p-2 active border-gray-200'>
      <input
        type='text'
        className='min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
        placeholder=' Search Courses...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className='btn btn-search search-button' type='submit'>
        Search
      </button>
    </form>
  )
}
export default CourseSearch
