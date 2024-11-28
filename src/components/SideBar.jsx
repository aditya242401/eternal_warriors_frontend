import React from 'react'
import { useTheme } from '../store/useTheme'
import { FaHome, FaUniversity, FaBook, FaUser, FaArrowCircleUp, FaCog } from 'react-icons/fa';
import { AcademyIcon, AccountIcon, DavidSterlingIcon, HODLIcon, HomeIcon, ResourcesIcon } from '../assets/icons';
import { Link } from 'react-router-dom';

const menuItems = [
  { name: 'Home', link: '/dashboard', icon: HomeIcon },
  { name: 'Academy', link: '/academy', icon: AcademyIcon },
  { name: 'Resources', link: '/resources', icon: ResourcesIcon },
  { name: 'David Sterling', link: '/david-sterling', icon: DavidSterlingIcon },
  { name: 'HODL', link: '/hodl', icon: HODLIcon },
  { name: 'Account Settings', link: '/account-settings', icon: AccountIcon },
]

export default function SideBar() {
  const { theme } = useTheme();

  return (
    <div className='w-[300px] min-h-full bg-white box-shadow-1'>
      <div className='mt-5'>
        <img src={`/assets/images/${theme == 'dark' ? 'logo.svg' : 'logo-light.svg'}`} className='mx-auto w-1/3' />
      </div>
      <div className='p-5 py-10'>
        <ul>
          {
            menuItems.map(ele => (
              <li key={ele.link}>
                <Link to={ele.link} className={`flex items-center rounded-[6px] gap-2 p-3 ${location.pathname.includes(ele.link) ? 'bg-[linear-gradient(90deg,#5500F4_0%,#4A00D5_100%)] text-white' : ''}`}>
                  <ele.icon color={location.pathname.includes(ele.link) ? '#FFFFFF' : '#8C8C8C'} /> {ele.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

const IconWrapper = ({ icon, color }) => {
  return <>
    <icon color={color} />
  </>
}