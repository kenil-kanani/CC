import React from 'react'
import Header from './Header'
import ExploreJobs from './ExploreJobs'
// import SearchBar from './SearchBar'

const Home = () => {
    return (
        <div>
            <Header />
            <div className='px-20'>
                <div className='md:hidden'>
                    <ExploreJobs />
                </div>
                {/* <div className='hidden md:flex'>
                    <SearchBar />
                </div> */}
            </div>
        </div>
    )
}

export default Home