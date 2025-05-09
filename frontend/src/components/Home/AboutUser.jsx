import {
    FaBriefcase,
    FaGraduationCap,
    FaHome,
    FaMapMarkerAlt,
    FaHeart,
    FaInfoCircle,

} from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
const AboutUser = ({ userData, className }) => {
  const bioDetails = [
    { icon: <FaInfoCircle />, label: 'Profile', value: userData?.profile || 'Digital creator' },
    { icon: <FaBriefcase />, label: 'Works at', value: userData?.worksAt || 'YouTube' },
    { icon: <FaGraduationCap />, label: 'Studied at', value: userData?.studiedAt || 'Sirajgonj Polytechnic Institute' },
    { icon: <FaHome />, label: 'Lives in', value: userData?.livesIn || 'Rajshahi' },
    { icon: <FaMapMarkerAlt />, label: 'From', value: userData?.from || 'Rajshahi' },
    { icon: <FaHeart />, label: '', value: userData?.relationship || 'Single' },
  ];

  return (
    <div>
      <div className={twMerge("mt-6 bg-[var(--gray-color)] p-4 rounded-[15px] text-white", className)}>
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
  );
};

export default AboutUser;