import React, {useEffect} from 'react'
import {BsArrowRightShort} from 'react-icons/bs'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Section3 = () => {
   useEffect(() => {
    AOS.init({
     
    });
  }, []);
  return (
    <div className=' flex flex-col items-center justify-center mt-10 pt-10 pb-10 px-20 bg-gray-100 md:flex-row lg:px-20'>
      <div className=' flex flex-col items-center justify-center' data-aos="zoom-in-right">
        <h1 className=' text-center text-2xl font-extrabold px-20 mt-0 mb-0'>Increase your vocabulary</h1>
         <p className=' text-xs font-bold text-gray-300 font-sans mb-6'>Traditional and new effective approaches to word study</p>
         <a href='/textbooks' className= ' flex flex-row items-center justify-center no-underline text-blue-300 font-extrabold rounded-full py-3 px-6 bg-blue-100 border-none'>Textbook<BsArrowRightShort size={25}/></a>
      </div>
      <div className=' flex flex-col items-center justify-center' data-aos="zoom-in-left">
        <img src="/image 2.png" alt="" />
      </div>

    </div>
  )
}

export default Section3