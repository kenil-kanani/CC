import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const CategoryCard = ({ icon, name, number_of_jobs }) => {
    return (
        <div className='font-plusSans'>
            <div className="w-48 h-48 bg-white rounded-2xl flex flex-col justify-around items-center">
                <div className='mt-5'>
                    <img src={icon} className='w-16 h-16' alt="" />
                </div>
                <div className="categoryName font-bold text-xl mt-1">
                    {name}
                </div>
                <div className="available flex items-center gap-2 pb-2 text-sm">
                    <div>
                        {number_of_jobs}+ jobs available
                    </div>
                    <FaArrowRight className='mt-1' />
                </div>
            </div>
        </div>
    )
}

export default CategoryCard