"use client"
import React from 'react'
import Link from 'next/link';


const Navbar = () => {
  return (
    <>
      <nav className=" text-white  p-4 flex  justify-between  items-center">
        <div className="text-xl text-[#caccce]  ">NoteX</div>
        <div className='flex flex-row text-base font-medium  space-x-7'>
           <Link  href="/">Home</Link>
           <Link href="/about"> about</Link>
           <Link href= "/contact"> contact</Link>
           <Link  href="/login">Sign in</Link>
        </div>
      
    </nav>
    </>
  )
}

export default Navbar