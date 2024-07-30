import HomePage from '@/components/HomePage'
import SplinePage from '@/components/SplinePage'
import React from 'react'


const page = () => {
  return (
    <>
    <div className='flex flex-row'>
    <HomePage/>
    <SplinePage/>
    </div>
    
    </>
  )
}

export default page