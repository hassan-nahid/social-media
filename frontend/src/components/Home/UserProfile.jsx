import React from 'react'
import { assest } from '../../assets/assest'
import { useNavigate } from 'react-router'

const UserProfile = () => {
    const navigate = useNavigate()
    return (
        <div className="relative h-[533px] bg-white-color w-full rounded-[15px] overflow-hidden">
            {/* Cover Image */}
            <div className="relative h-[200px] w-full">
                <img
                    src={assest.coverImage}
                    alt="Cover"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Profile Card */}
            <div className="absolute bottom-0 gray-color w-full rounded-t-[15px] flex flex-col items-center px-4">
                <div className="relative -top-14">
                    <img
                        src={assest.blankImage}
                        alt="Profile"
                        className="rounded-full w-28 h-28 object-cover border-[4px] border-[var(--black-color)]"
                    />
                </div>
                <h2 className="text-xl text-white font-semibold">Elviz Dizzouza</h2>
                <p className="text-[var(--text-gray)]">@elvizoodem</p>
                <p className="mt-4 text-sm px-4 text-center">
                    <span className="text-[var(--yellow-color)]">★</span>&nbsp;
                    Hello, I’m UI / UX designer. Open to the new Project
                    &nbsp;<span className="text-[var(--yellow-color)]">★</span>
                </p>
                <div className="flex justify-around w-full mt-4 text-white text-sm">
                    <div className="text-center">
                        <h2 className="text-lg font-bold">1984</h2>
                        <p className="text-[var(--text-gray)]">Followers</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-lg font-bold">1002</h2>
                        <p className="text-[var(--text-gray)]">Following</p>
                    </div>
                </div>
                <div>
                    <button
                        onClick={() => navigate('/profile')}
                        className="py-3 px-[84px] my-[22px] text-gray cursor-pointer rounded-[15px]"
                        style={{
                            background: "linear-gradient(183deg, #282828 -28.66%, #8E8E8E 386.98%)",
                        }}
                    >
                        My Profile
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserProfile