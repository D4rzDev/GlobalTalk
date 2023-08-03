import React, {useEffect} from 'react'
import {BsArrowRightShort} from 'react-icons/bs'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Section2 = () => {
  useEffect(() => {
    AOS.init({
     
    });
  }, []);
  return (
    <div className=' flex flex-col items-center justify-center pt-10 pb-10 md:flex-row md:px-20'>
      <div className=' flex flex-col items-center justify-center' data-aos="zoom-in-right">
        <img src="/image3.png" alt="" />
      </div>
      <div className=' flex flex-col items-center justify-center' data-aos="zoom-in-left">
        <h1 className=' text-center text-2xl px-20 font-extrabold mt-0 mb-0 md:px-40'>Learn a language in a playful way</h1>
        <p className=' text-xs font-bold text-gray-300 font-sans'>Make learning words more fun with mini-games</p>
        <div className=' flex flex-row items-center justify-center gap-6'>
            <div className=' flex flex-col items-center justify-end mt-16 bg-pink-300 h-[114px] w-[112px] rounded-xl'>
                <img src="/image 10.svg" alt="" />
                <a href='/sprint' className='  flex items-center justify-center text-sm font-bold text-end text-pink-500'>Sprint <BsArrowRightShort size={25}/></a>
            </div>

            <div className=' flex flex-col items-center justify-end mt-16 bg-blue-300 h-[112px] w-[174px] rounded-xl'>
                <img src="/image 11.svg" alt="" />
                <a href='/sprint' className=' flex items-center justify-center text-sm font-bold text-end text-blue-500'>Sprint<BsArrowRightShort size={25}/></a>
            </div>

        </div>
      </div>
        
    </div>
  )
}

export default Section2