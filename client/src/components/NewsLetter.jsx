import React from 'react'
import NewslatterBg from "../assets/NewslatterBg.svg"
import EmailIcon from '@mui/icons-material/Email';

const NewsLetter = () => {
    return (
        <div className='w-full font-plusSans md:hidden'>
            <div className='flex flex-col px-6 md:px-24 pt-7 pb-9'>
                <div className="font-bold text-4xl">
                    New Things Will Always <span className='text-[#2196F3]'>Update Regularly</span>
                </div>
                <div className='flex mt-7 relative'>
                    <EmailIcon className='absolute left-3 top-3 text-lg text-[#2196F3]' />
                    <input type="text" className='w-full py-3 pl-10 border-2 border-[#2196F3] rounded-md border-r-0 rounded-r-none px-2 outline-none' placeholder='Enter your email here' />
                    <button className='bg-[#2196F3] px-4 py-3 border-r border-[#2196F3] rounded-r-md font-semibold text-white'>Subscribe</button>
                </div>
            </div>
            {/* <img src={NewslatterBg} alt="" className='px-2 h-full'/> */}
        </div>
    )
}

export default NewsLetter