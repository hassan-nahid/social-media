import React from 'react'
import ProfileSection from '../../components/Home/ProfileSection'
import FeedSection from '../../components/Home/FeedSection'
import FriendSection from '../../components/Home/FriendSection'


const Home = () => {



    return (
        <div className='flex max-w-[1440px] mx-auto gap-4'>
            {/* profile section */}
            <div className='h-screen w-[27%] bg-red-600'>
                <ProfileSection/>
            </div>

            {/* feed section */}
            <div className='h-screen w-[46%] bg-green-600'>
                <FeedSection/>
            </div>
            <div className='h-screen w-[27%] bg-blue-600'>
                <FriendSection/>
            </div>
            {/* add friend section */}
        </div>
    )
}

export default Home