import React from 'react'
import { BsChatSquareDots } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='bg-[#070743] text-white w-full max-w-full md:px-10 px-5 md:py-20 py-10'>
      <div className='flex flex-wrap md:flex-row flex-col gap-10 md:gap-5 mx-10'>
        <div className='flex-1'>
          <img src='/assets/images/logo-footer.svg' className='mx-auto md:ms-0' />
        </div>
        <div className='flex-1 text-center md:text-start'>
          <p className='mb-4 font-extrabold'>Content</p>
          <ul>
            <li>Toolbox</li>
            <li>Playbook</li>
            <li>Academy</li>
            <li>Certifications</li>
            <li>Directory</li>
          </ul>
        </div>
        <div className='flex-1 text-center md:text-start'>
          <p className='mb-4 font-extrabold'>Quick Links</p>
          <ul>
            <li>Events</li>
            <li>Workshops</li>
            <li>Conference 2025</li>
            <li>Book a Speaker</li>
          </ul>
        </div>
        <div className='flex-1 text-center md:text-start'>
          <p className='mb-4 font-extrabold'>Social Media</p>
          <div className='flex gap-4 justify-center md:justify-start'>
            <FaFacebook size={35} />
            <FaLinkedin size={36} />
            <FaInstagram size={36} />
          </div>
        </div>
        <div className='flex-1 text-center md:text-start'>
          <p className='mb-4 font-extrabold'>Contact</p>
          <div className='flex gap-2 items-center justify-center md:justify-start'>
            <BsChatSquareDots size={20} />
            <p>info@eternalwarriors.io</p>
          </div>

          <div className='mt-10 flex flex-col gap-4 md:w-4/5 w-full'>
            <button className='bg-[#D9B1FF] text-black font-bold py-4 px-3 rounded-[10px]'>
              Subscribe Now
            </button>
            <button className='border border-[##D9B1FF] text-[#D9B1FF] font-bold py-4 px-3 rounded-[10px]'>
              Email us
            </button>
          </div>
        </div>
      </div>

      <div className='text-[rgba(255,255,255,0.5)] mt-8 mx-10'>
        <ul className='flex flex-col md:flex-row items-center gap-8'>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Disclaimer</li>
        </ul>
      </div>

      <div className='text-center mt-8'>
        <p>2024  ©  eternalwarriors | All right received.</p>
      </div>
    </div>
  )
}