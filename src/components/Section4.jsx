import React, {useEffect} from 'react'
import { BsArrowRightShort} from 'react-icons/bs'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Section4 = () => {
   useEffect(() => {
    AOS.init({
     
    });
  }, []);
  return (
     <div className=' flex flex-col items-center justify-center pt-10 pb-10' data-aos="zoom-in">
        <img src="/image 8.png" alt="" />
        <h1 className=' text-center text-2xl font-extrabold px-20 mt-0 mb-0'>Watch your progress every day</h1>
         <p className=' text-xs font-bold text-gray-300 font-sans mb-6 px-10 text-center'>Save statistics on your achievements, words learned, and mistakes</p>
         <button className= ' flex flex-row items-center justify-center text-blue-300 font-extrabold rounded-full py-3 px-6 bg-blue-100 border-none'>Statistics<BsArrowRightShort size={25}/></button>
    </div>
  )
}

export default Section4