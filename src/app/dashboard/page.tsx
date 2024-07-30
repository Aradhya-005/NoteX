import React from 'react'
import CustomInput from '@/components/CustomInput'
import "./Custom.css";

const page = () => {
  return (
    <div className=' ml-96 mt-14 justify-center  w-[65%]  '>
    <h1 className='text-gradient logo-1 text-[55px] font-semibold bg-gradient-to-r from-[#4959cd] via-[#c94c38] to-[#D83A56] bg-clip-text text-transparent ' >Hello, Aradhya</h1>
    <h1 className=' text-[55px] text-[#4f4e4e] font-semibold'>How can I help you today?</h1>
    <div className='' >
       <CustomInput/>
    </div>
    </div>
    
  )
}

export default page