import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import design from "../assets/design.png"
import finance from "../assets/finance.png"
import hr from "../assets/hr.png"
import it from "../assets/it.png"
import engineering from "../assets/engineering.png"
import management from "../assets/management.png"
import CategoryCard from './CategoryCard';

const categories = [
    {
        icon: design,
        name: "Design"  ,
        number_of_jobs: 10
    },
    {
        icon: hr,
        name: "Human Resources",
        number_of_jobs: 8
    },
    {
        icon: finance,
        name: "Finance",
        number_of_jobs: 20
    },
    {
        icon: engineering,
        name: "Automobile",
        number_of_jobs: 15
    },
    {
        icon: it,
        name: "Software Engineer",
        number_of_jobs: 5
    },
    {
        icon: management,
        name: "Management",
        number_of_jobs: 14
    }
];

const Categories = () => {
    return (
        <div className='w-full bg-blue-200 py-9 md:hidden'>
            <div className="heading flex flex-col md:items-center md:justify-between md:px-2 md:flex-row">
                <div className='text-3xl px-3 font-semibold font-plusSans'><span className="text-zinc-800">Explore by </span><span className="text-blue-500">categories</span></div>
                <div className='flex gap-2 items-center mt-2 justify-end pr-8'>
                    <div className="text-zinc-800 text-xl font-semibold font-plusSans underline">Show all jobs</div>
                    <FaArrowRight className='mt-1' />
                </div>
            </div>
                <div className="categoryList md:px-20 md:pt-8 flex flex-wrap justify-center gap-3 gap-y-7 mt-6 mb-5">
                    {categories.map((category, index) => (
                        <CategoryCard
                            key={index}
                            icon={category.icon}
                            name={category.name}
                            number_of_jobs={category.number_of_jobs}
                        />
                    ))}
                </div>
        </div>
    )
}

export default Categories