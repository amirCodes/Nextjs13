import React from 'react'

async function GetMeetingList () {
  const res = await fetch('https://mejabulatv2.onrender.com/events/all')
  const result = await res.json()
  return result
}
export default async function FetchMeetingList () {
  const MeetingList = await GetMeetingList()
  return (
    <>
      <div><h1 className='text-lg text-bold'>Mejabulat Meeting List: {MeetingList && MeetingList.length}</h1></div>
      <div className='flex flex-wrap'>
        {MeetingList && MeetingList.map((meeting) => (
          <div key={meeting._id} className='shrink overflow-hidden bg-yellow-600 shadow-2x1 hover:shadow-lg border-2 mb-12 sm:rounded-lg lg:max-w-[50%] sm:w-full'>
            <div className='px-4 py-5 sm:px-6'>
              <h3 className='text-base font-semibold leading-6 text-white'>{meeting.room_name}</h3>
              {/* <p className='mt-1 max-w-2xl text-sm text-white'>{meeting.description}</p> */}
            </div>
            <div className='border-t border-yellow-700'>
              <dl>
                <div className='bg-yellow-500 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-white'>Date</dt>
                  <dd className='mt-1 text-sm text-white sm:col-span-2 sm:mt-0'>{meeting.createdAt}</dd>
                </div>
              </dl>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
