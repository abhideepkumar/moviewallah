import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    // Display message when user navigates to /movie without an ID
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-xl font-bold'>You are at the wrong page. please use the search bar to search for a movie.</h1>
        <Link href="/" className='bg-teal-500 text-white p-2 mt-5 rounded-md'>Home</Link>
    </div>
  )
}

export default Page