import React from 'react'
import screenshot from './assets/userCard.png'

export default function User() {
  return (
    <>
    <div className='text-xl text-center font-bold mt-12 max-w-3xl mx-auto py-24 px-12 border border-2 border-blue-500 shadow-xl'>This should display the user card on the "User Show" page you have currently have routed for each user.
    </div>
    <img src={screenshot} alt="screen shot" className='mx-auto max-w-5xl mt-24 drop-shadow-xl' />
    </>
  )
}
