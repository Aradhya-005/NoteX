import HomePage from '@/components/HomePage'
import SplinePage from '@/components/SplinePage'
import React from 'react'


const page = () => {
  return (
    <>
    <div className='flex flex-row xs:flex-col-reverse sm:flex-col-reverse'>
    <HomePage/>
    <SplinePage/>
    </div>
    
    </>
  )
}

export default page