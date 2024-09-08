import React from 'react'
import { useRouter } from 'next/navigation'
import GoBack from '@/public/icons/goBack'
const Back = () => {
    const router = useRouter()
  return (
    <div className='absolute top-0 left-0 m-4 p-2'>
    <button onClick={() => router.back()}><GoBack/></button>
    </div>
  )
}

export default Back