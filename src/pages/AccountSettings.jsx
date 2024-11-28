import React from 'react'
import Layout from '../components/Layout'
import { BiEditAlt } from 'react-icons/bi'

export default function AccountSettings() {
  return (
    <Layout>
      <div className='px-6 pt-6'>
        <div className="p-10 bg-[url('/assets/images/account-settings-banner.png')] bg-cover rounded-[20px]">
          <p className='text-[20px] text-white'>Hi John Doe, good evening!</p>
        </div>

        <div className='mt-6'>
          <div className='flex h-full gap-10'>
            <div className='w-3/5 p-10 rounded-[20px] overflow-hidden bg-white'>
              <h1 className='text-[32px]'>Account settings</h1>
              <p className='text-[16px] text-[#868686]'>Change Profile Picture</p>

              <div className='flex gap-10 mt-5'>
                <div className='flex-1'>
                  <div className='rounded-full relative overflow-hidden bg-[rgba(217,177,255,0.25)] p-10'>
                    <input type='file' className='my-input-file' />
                    <img src='/assets/images/profile-pic.png' className='w-full h-full object-cover' />
                    <div className='absolute bottom-[2.5rem] backdrop-blur-sm left-[2.5rem] rounded-br-full rounded-bl-full w-[calc(100%-5rem)] h-1/3 bg-[rgba(0,0,0,0.3)] flex justify-center items-center'>
                      <img src='/assets/images/icons/edit-icon.svg' className='w-[24px]' />
                    </div>
                  </div>
                </div>
                <div className='flex-1'>
                  <div className='content text-center'>
                    <img src='/assets/images/ranks/diamond.png' className='w-1/2 mx-auto' />
                    <p className='mt-3 font-medium text-[15px]'>DIAMOND</p>
                    <p className='font-medium text-[#4A00D5] text-[15px]'>YOUR LEVEL - 01</p>
                  </div>
                </div>
              </div>

              <div className='mt-5'>
                <p className='text-[16px] text-[#868686]'>Change Profile Picture</p>
                <input type='text' placeholder='Enter Username' className='w-full p-3 px-4 mt-3 border outline-0 border-[#D9B1FF] rounded-[10px]' />
              </div>

              <div className='mt-5'>
                <p className='text-[16px] text-[#868686]'>Two Factor Authenticator</p>
                <input type='toggle' placeholder='Enter Username' className='w-full p-3 px-4 mt-3 border outline-0 border-[#D9B1FF] rounded-[10px]' />
              </div>

              <div className='mt-5'>
                <p className='text-[16px] text-[#868686]'>Change Language</p>
                <input type='text' placeholder='Enter Username' className='w-full p-3 px-4 mt-3 border outline-0 border-[#D9B1FF] rounded-[10px]' value={"English"} disabled />
              </div>

              <div className="mt-10">
                <button className='w-full flex gap-3 justify-center items-center bg-[#4A00D5] text-white rounded-[10px] py-3'>
                  Save Settings
                </button>
              </div>

            </div>
            <div className='w-2/5 rounded-[20px] overflow-hidden'>
              <img src='/assets/images/account-settings-right.png' className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}