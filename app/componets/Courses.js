import React from 'react'

export default function FetchCourses ({ courses }) {
  return (
    <>
      <div className='flex flex-wrap'>
        {courses && courses.map((course) => (
          <div key={course.id} className='shrink overflow-hidden bg-blue-500 shadow-2x1 hover:shadow-lg border-2 mb-12 sm:rounded-lg lg:max-w-[50%] sm:w-full'>
            <div className='px-4 py-5 sm:px-6'>
              <h3 className='text-base font-semibold leading-6 text-white'>Title: {course.title}</h3>
              <p className='mt-1 max-w-2xl text-sm text-white'>{course.description}</p>
            </div>
            <div className='border-t border-blue-700'>
              <dl>
                <div className='bg-blue-500 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-white'>Level</dt>
                  <dd className='mt-1 text-sm text-white sm:col-span-2 sm:mt-0'>{course.level}</dd>
                  <dd className='mt-1 text-sm text-green sm:col-span-2 sm:mt-0'>{course.link}</dd>
                </div>
              </dl>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
