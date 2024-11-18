import React from 'react'
import { RiLinkM } from 'react-icons/ri'

export default function Login() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] dark:bg-[url('/assets/images/bg-page.png')] bg-cover p-5">
      <div className='flex flex-wrap flex-col md:flex-row gap-5'>
        <div className="flex-1 min-h-full">
          <div className='rounded-[20px] box-shadow-1 dark:bg-[#160029] bg-white min-h-full overflow-hidden p-5 flex justify-center items-center'>
            <div className='text-center w-full'>
              <img src='/assets/images/logo-light.svg' className='w-[100px] mx-auto' />
              <h1 className='text-[40px] mt-10'>WELCOME BACK!</h1>
              <p className='text-[#616161] text-[14px] mt-5'>Please log in using your wallet address.</p>
              <button className='mt-10 w-full flex gap-3 justify-center items-center bg-[#4A00D5] text-white rounded-[10px] py-3'><RiLinkM /> CONNECT WALLET</button>
              <p className='mt-5'>Need help? Please contact our <a href="#" className='text-[#B266FF] cursor-pointer'>support team</a></p>
              <p className='mt-20 text-[#636363] text-[12px]'>By proceeding, you agree to our Terms of use,
              Read our Privacy Policy</p>
            </div>
          </div>
        </div>
        <div className="flex-1 min-h-full">
          <div className='rounded-[20px] overflow-hidden min-h-full'>
            <img src='/assets/images/login-right.png' className='min-h-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  )
}