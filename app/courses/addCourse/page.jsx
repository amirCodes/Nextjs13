'use client'
import { useState } from 'react'

function AddCourse () {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    level: '',
    link: ''
  })
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    // Set the submitting state to true while the form is being submitted
    setSubmitting(true)
    const response = await fetch('/api/courses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      // Handle successful response
      console.log('Data sent successfully')
    } else {
      // Handle error response
      console.error('Error sending data')
    }
    // Reset the form data to its initial state or an empty object
    setFormData({
      title: '',
      description: '',
      level: '',
      link: ''
    })

    // Set the submitting state back to false once the form has been submitted
    setSubmitting(false)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }
  return (
    <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 sm:grid-cols-1'>
      <form onSubmit={handleSubmit}>
        <div className='sm:col-span-1'>
          <label htmlFor='first-name' className='block text-sm font-medium leading-6 text-gray-900'>
            Title
          </label>
          <div className='mt-2'>
            <input
              type='text'
              name='title'
              id='title'
              autoComplete='given-title'
              onChange={handleChange}
              value={formData.title}
              required
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>
        <div className='sm:col-span-1'>
          <label htmlFor='first-name' className='block text-sm font-medium leading-6 text-gray-900'>
            Description
          </label>
          <div className='mt-2'>
            <input
              type='text'
              name='description'
              id='description'
              autoComplete='given-description'
              onChange={handleChange}
              value={formData.description}
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>
        <div className='sm:col-span-1'>
          <label htmlFor='first-name' className='block text-sm font-medium leading-6 text-gray-900'>
            Level
          </label>
          <div className='mt-2'>
            <input
              type='text'
              name='level'
              id='level'
              autoComplete='given-level'
              onChange={handleChange}
              value={formData.level}
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>
        <div className='sm:col-span-1'>
          <label htmlFor='first-name' className='block text-sm font-medium leading-6 text-gray-900'>
            Link
          </label>
          <div className='mt-2'>
            <input
              type='text'
              name='link'
              id='link'
              autoComplete='given-link'
              onChange={handleChange}
              value={formData.link}
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>
        <div className='sm:col-span-3 p-5'>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddCourse
