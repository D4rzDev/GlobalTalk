import React from 'react'
import { BiSolidGraduation} from 'react-icons/bi'
import { BsBookFill} from 'react-icons/bs'
import { AiFillSetting} from 'react-icons/ai'

const Textbooks = () => {
  return (
    <div className=' flex flex-col items-center justify-center bg-gray-100 pt-10 px-10'>
        <div className=' flex flex-col items-center justify-center bg-white rounded-xl px-10'>
            <div className=' flex flex-row items-center justify-center gap-8'>
                <h1 className=' flex items-center justify-center text-lg gap-2'><BiSolidGraduation size={20}/>Textbook</h1>
                <h1 className=' flex items-center justify-center text-lg text-gray-300'><BsBookFill size={20}/>Dictionary</h1>
            </div>
            <div className=' flex flex-row items-center justify-center bg-white rounded-xl gap-2'>
                <a href='/sprint' className=' flex items-center justify-center text-sm no-underline px-4 py-1 rounded-xl text-pink-300 bg-pink-100 gap-2'><img className=' h-8 w-8' src="/image 10.svg" alt="" />Sprint</a>
                <a href='/audio' className=' flex items-center justify-center text-sm no-underline px-4 py-1 rounded-xl text-blue-300 bg-blue-100 gap-2'><img className=' h-8 w-8' src="/image 11.svg" alt="" />Audio</a>
                <h1 className=' flex items-center justify-center text-sm text-blue-300 bg-blue-100 px-2 py-2 rounded-lg'><AiFillSetting size={20}/></h1>
            </div>
            
        </div>
        <div className=' flex flex-row items-center justify-center gap-4 pb-10'>
            <h1 className=' flex items-center justify-center gap-2 text-sm bg-white px-2 rounded-lg'>A1<p className=' bg-blue-100 px-2 rounded-md text-blue-300 text-xs font-sans'>Easy</p></h1>
            <h1 className=' flex items-center justify-center gap-2 text-sm'>A2<p className=' bg-blue-100 px-2 rounded-md text-blue-300 text-xs font-sans'>Easy</p></h1>
            <h1 className=' flex items-center justify-center gap-2 text-sm'>B1<p className=' bg-pink-100 px-2 rounded-md text-pink-300 text-xs font-sans'>Medium</p></h1>
            <h1 className=' flex items-center justify-center gap-2 text-sm'>B2<p className=' bg-pink-100 px-2 rounded-md text-pink-300 text-xs font-sans'>Medium</p></h1>
        </div>

        <div className=' flex flex-col bg-white rounded-xl'>
            <img className=' rounded-t-xl' src="/text.png" alt="" />
            <h1 className=' text-start mt-0 mb-0 text-lg px-6'>Remark</h1>
            <h1 className=' text-start mt-0 mb-0 text-lg px-6 text-gray-300'>note</h1>

            <div className=' flex flex-row items-center'>
                <p className=' px-6 mt-0 text-xs'>[rimɑ́ːrk]</p>
                <p className=' text-xs text-blue-300 bg-blue-100 px-2 py-1 mt-0 rounded-md'>compound</p>
            </div>
            <p className=' text-xs font-sans px-6 mt-0'>To remark is to say something. - Remarquer, c'est dire quelque chose</p>
            <p className=' text-xs font-sans px-6 mt-0 text-gray-300 mb-10'>The teacher remarked on how quickly the students were learning. L'enseignant a noté la rapidité avec laquelle les élèves apprenaient.</p>

            <h1 className=' text-sm py-4 text-blue-300 rounded-xl bg-blue-100 mx-6 w-[150px] mt-0 pl-6'>Add to learned</h1>
             <h1 className=' text-sm py-4 text-pink-300 mb-10 rounded-xl bg-pink-100 mx-6 w-[220px] mt-0 pl-6'>Remove from dictionary</h1>
        </div>
       
    
    </div>
  )
}

export default Textbooks