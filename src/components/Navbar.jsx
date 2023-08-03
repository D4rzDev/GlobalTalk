import React from 'react'
import { BiMenuAltLeft} from 'react-icons/bi'
import { AiFillHome, AiFillAudio, AiOutlineAreaChart} from 'react-icons/ai'
import { BsFillBookFill} from 'react-icons/bs'
import { GiSprint} from 'react-icons/gi'
import { GrFormClose} from 'react-icons/gr'
import { useState } from 'react'

const Navbar = () => {

  const [ nav, setNav] = useState(false);

  const toggleMenu = () =>{
        setNav(!nav);
    }
  return (
    <nav className=' relative'>
        <div className=' flex flex-row  items-center justify-between px-4 border-b-2 border-gray-300 md:px-20'>
          <div className=' md:hidden ' onClick={toggleMenu}>
              { !nav ? <BiMenuAltLeft size={25}/> : <GrFormClose size={25}/>}
          </div>
            <h1 className=' text-xl font-extrabold'>GlobalTalk</h1>
            <ul className=' hidden items-center justify-center gap-4 pr-20 text-center list-none text-[10px] font-light md:flex md:items-center md:justify-center'>
              <a href='/main' className=' text-black no-underline hover:text-blue-300 transform'>Main</a>
              <a href='/textbooks' className=' text-black no-underline hover:text-blue-300 transform'>Textbooks</a>
              <a href='/sprint' className=' text-black no-underline hover:text-blue-300 transform'>Sprint</a>
              <a href='/audio' className=' text-black no-underline hover:text-blue-300 transform'>Audio-Call</a>
            </ul>
            <div className=' flex items-center justify-center rounded-full h-10 w-10  bg-slate-100'>
              <p className=' text-sm font-sans text-blue-300'>A</p>
            </div>
        </div>
        <ul className={ !nav ? 'hidden' : ' flex flex-col items-center justify-center list-none mt-0 mb-0 h-[400px] gap-4 text-sm text-blue-300'}>
          <a href='/main' className=' flex flex-row items-center text-black no-underline hover:text-blue-300 transform justify-center gap-2'><AiFillHome size={20}/>Main </a>
          <a href='/textbooks' className=' flex flex-row items-center text-black no-underline hover:text-blue-300 transform justify-center gap-2'><BsFillBookFill size={20}/> Textbooks</a>
          <a href='/sprint' className=' flex flex-row items-center text-black no-underline hover:text-blue-300 transform justify-center gap-2'><GiSprint size={20}/> Sprint</a>
          <a  href='/audio'className=' flex flex-row items-center  text-black no-underline hover:text-blue-300 transformjustify-center gap-2'><AiFillAudio size={20}/> Audio-Call</a>
        </ul>
    </nav>
  )
}

export default Navbar