import React from 'react'
import {
    FaBriefcase,
    FaGraduationCap,
    FaHome,
    FaMapMarkerAlt,
    FaHeart,
    FaInfoCircle,

} from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
const AboutUser = ({className}) => {
    const bioDetails = [
        { icon: <FaInfoCircle />, label: 'Profile', value: 'Digital creator' },
        { icon: <FaBriefcase />, label: 'Works at', value: 'YouTube' },
        { icon: <FaGraduationCap />, label: 'Studied at', value: 'Sirajgonj Polytechnic Institute' },
        { icon: <FaHome />, label: 'Lives in', value: 'Rajshahi' },
        { icon: <FaMapMarkerAlt />, label: 'From', value: 'Rajshahi' },
        { icon: <FaHeart />, label: '', value: 'Single' },
    ];
    return (
        <div>
            <div className={twMerge("mt-6 bg-[var(--gray-color)] p-4 rounded-[15px] text-white" , className)}>
                <h1 className="text-[#FFF] text-xl font-bold ml-1.5 mb-4">About</h1>
                {bioDetails.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 py-1 text-sm mt-2">
                        <span className="text-lg mt-1 text-[var(--text-gray)]">{item.icon}</span>
                        <span>
                            {item.label && <strong>{item.label}</strong>}
                            {item.label && item.value && ' · '}
                            <span className="text-white">{item.value}</span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutUser