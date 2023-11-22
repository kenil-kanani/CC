import React from 'react'
import Header from './Header'
import ExploreJobs from './ExploreJobs'
// import SearchBar from './SearchBar'

const Home = () => {
    return (
        <div className='pb-12 w-full'>
            <Header />
            <div className='px-20'>
                <div className='md:hidden'>
                    <ExploreJobs />
                </div>
                <div className='hidden md:flex'>
                    {/* <SearchBar /> */}
                    SearchBar will come here
                </div>
            </div>
        </div>
    )
}

export default Home