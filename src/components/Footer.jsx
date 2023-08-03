import React from 'react'
import { BsFacebook, BsYoutube, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className=' flex flex-col items-center justify-center w-screen bg-gray-100 pt-12'>
        <div className=' flex flex-row items-start gap-28'>
            <div className=' flex flex-col items-center justify-center gap-2'>
                <li className=' list-none text-sm font-bold font-sans text-gray-300'>Home</li>
                <li className=' list-none text-sm font-bold font-sans text-gray-300'>Textbooks</li>
                <li className=' list-none text-sm font-bold font-sans text-gray-300'>Statistics</li>
            </div>
            <div className=' flex flex-col items-center justify-center gap-2'>
                <li className=' list-none text-sm font-bold font-sans text-gray-300'>Sprint</li>
                <li className=' list-none text-sm font-bold font-sans text-gray-300'>Audio-Call</li>
            </div>
        </div>

        <div className=' flex flex-row items-center justify-center pt-10 gap-6'>
            <BsFacebook size={30} className=' text-gray-300'/>
            <BsYoutube size={30} className=' text-gray-300'/>
            <BsInstagram size={30} className=' text-gray-300'/>
        </div>

        <p className=' text-sm font-normal font-sans text-gray-300'>©2021 GlobalTalk. Project for GlobalTalk.</p>

    </div>
  )
}

export default Footer