import React from 'react'

const Audio = () => {
  return (
    <div className=' flex flex-col items-center justify-center px-10 pt-10 pb-10 bg-gray-100 '>
        <div className=' flex flex-col items-center justify-center bg-white rounded-xl px-10 md:flex-row md:px-20 md: py-20'>
            <div className=' flex flex-col items-center justify-center'>
                <img src="/audio.png" alt="" />
            </div>
            <div className=' flex flex-col items-center justify-center'>
            <h1 className=' flex items-center justify-center text-4xl font-extrabold gap-2'>Audio-Call <span className=' text-xs font-sans font-bold text-blue-300 rounded-2xl py-1 px-2 bg-blue-100'>Audition Task</span></h1>
             <p className=' text-sm font-sans mt-0 mb-0 text-center text-gray-300'>The Audio-Call training develops vocabulary and improves listening comprehension.</p>
             <p className=' text-sm font-sans mt-2 mb-0 text-center text-gray-300'>Choose Level : </p>
             <div className=' flex flex-row items-center justify-center gap-2'>
                <p className=' flex items-center justify-center text-[10px] h-10 w-10 rounded-full bg-blue-200'>A1</p>
                <p className=' flex items-center justify-center text-[10px] h-10 w-10 rounded-full bg-blue-200'>A2</p>
                <p className=' flex items-center justify-center text-[10px] h-10 w-10 rounded-full bg-pink-200'>B1</p>
                <p className=' flex items-center justify-center text-[10px] h-10 w-10 rounded-full bg-pink-200'>B2</p>
                <p className=' flex items-center justify-center text-[10px] h-10 w-10 rounded-full bg-purple-200'>C1</p>
                <p className=' flex items-center justify-center text-[10px] h-10 w-10 rounded-full bg-purple-200'>C2</p>
             </div>

             <p className=' py-2 px-4 bg-blue-100 text-blue-300 font-sans rounded-full mb-10 mt-10'>Get Started</p>
            </div>
         
        </div>
    </div>
  )
}

export default Audio