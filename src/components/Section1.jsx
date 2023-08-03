import React from 'react'
import { AiFillThunderbolt} from 'react-icons/ai'
import { BiPlusMedical} from 'react-icons/bi'
import { FaGamepad} from 'react-icons/fa'


const Section1 = () => {
   
  return (
    <div className='flex flex-col items-center justify-center gap-4 px-20 pt-20 bg-gray-100 md:flex-row'>
      <div className=' flex flex-col items-center justify-center gap-2'>
        <p className='text-xs font-bold text-blue-300 mt-0 mb-0'>E-COURSE PLATFORM</p>
        <h1 className=' text-center text-4xl font-extrabold mt-0 mb-0 md:px-20'>Learning and Teaching online, made easy.</h1>
        <p className='text-sm font-semibold text-gray-300 font-sans'>Practice and learn new things with the platform.</p>
        <button className='text-blue-300 mt-6 font-extrabold rounded-full py-3 px-6 bg-blue-100 border-none'>About Platform</button>
        <div className=' flex flex-row items-center justify-between gap-8 pt-10 pb-10'>
            <div className=' flex flex-col items-center justify-center'>
                <div className=' flex flex-row items-center justify-center mt-0 mb-0'>
                     <AiFillThunderbolt className=' text-blue-300'/>
                     <p>600</p>
                     <BiPlusMedical className=' text-blue-300'/>
                </div>
               <div>
                 <p className=' text-xs font-semibold text-gray-300 mt-0 mb-0'>Popular Words</p>
               </div>
               
            </div>

             <div className=' flex flex-col items-center justify-center'>
                <div className=' flex flex-row items-center justify-center mt-0 mb-0'>
                     <FaGamepad className=' text-blue-300'/>
                     <p>2</p>
                     <BiPlusMedical className=' text-blue-300'/>
                </div>
                <p className=' text-xs font-semibold text-gray-300 mt-0 mb-0'>Mini Games</p>
               
            </div>
        </div>
      </div>
       
      <div className=' flex items-center justify-center' >
        <img src="/illustration1.png" alt="" />
      </div>
    </div>
     
   
  )
}

export default Section1