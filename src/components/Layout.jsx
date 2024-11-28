import React from 'react'
import SideBar from './SideBar'

export default function Layout({ children }) {
  return (
    <div className='flex'>
      <SideBar />
      <div className='h-full bg-[#F8F8F8] flex-1'>
        {children}
      </div>
    </div>
  )
}
