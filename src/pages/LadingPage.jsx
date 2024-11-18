import { GiGraduateCap } from 'react-icons/gi'
import HeroSection from '../components/Landing/HeroSection'
import Leadership from '../components/Landing/Leadership'
import SterlingSection from '../components/Landing/SterlingSection'
import WhoWeAre from '../components/Landing/WhoWeAre'
import { IoFolderOpen } from 'react-icons/io5'
import { FaCircleArrowDown } from 'react-icons/fa6'
import Footer from '../components/Footer'

const temData = [
  {
    icon: <GiGraduateCap size={38} />,
    name: 'Course name 0.4v',
    bg: "/assets/images/file-bg-1.png",
  },
  {
    icon: <IoFolderOpen size={38} />,
    name: 'User Guides 0.1v',
    bg: "/assets/images/file-bg-2.png",
  },
  {
    icon: <GiGraduateCap size={38} />,
    name: 'Course name 0.6v',
    bg: "/assets/images/file-bg-1.png",
  },
  {
    icon: <IoFolderOpen size={38} />,
    name: 'Checklist No_0.1v',
    bg: "/assets/images/file-bg-2.png",
  }
]

export default function LadingPage() {
  return (
    <>
      <HeroSection />
      <div className="bg-white dark:bg-[url('/assets/images/bg-2.png')] dark:bg-[#110C13] bg-cover">
        <WhoWeAre />
        <Leadership />
        <SterlingSection />

        {/* Helpful Resources */}
        <div className='w-full max-w-full px-10 py-20'>
          <div className='text-center'>
            <h1 className='text-[64px] text-black dark:text-white leading-[110%]'>Helpful <span className='text-[#A300D1]'>Resources</span></h1>
          </div>
          <div className='mt-20'>
            <div className='flex flex-wrap gap-10'>
              {temData?.map((ele, i) => (
                <div key={i}
                  className={`flex flex-col justify-between bg-cover p-10 rounded-[20px] flex-1`}
                  style={{ backgroundImage: `url('${ele.bg}')` }}
                >
                  <div>
                    <button className='bg-[rgba(255,255,255,0.2)] p-4 text-white rounded-full'>
                      {ele.icon}
                    </button>
                  </div>
                  <p className='text-[32px] my-[45px] text-white'>{ele.name}</p>
                  <button className='flex items-center gap-2 text-white'>
                    <FaCircleArrowDown size={24} />
                    Download now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ranks */}
        <div className='w-full max-w-full px-10 pt-20'>
          <div className=''>
            <h1 className='text-[64px] text-black dark:text-white leading-[110%]'>
              Climb the ranks to<br /><span className='text-[#A300D1]'>Freedom</span>
            </h1>
          </div>
          <div className=''>
            <div>
              <img src='/assets/images/ranks.png' className='w-full' />
            </div>
            <p className='text-[#8C8C8C] my-10 text-[24px] text-center w-full md:w-4/5 mx-auto'>Our vision is to build a worldwide network where leadership is nurtured through continuous personal development, spiritual harmony, and collective empowerment. We aim to inspire individuals to lead with love, integrity, and purpose, fostering positive change in their communities and beyond.</p>
          </div>
        </div>

        {/* Join Event */}
        <div className='w-full max-w-full px-10 py-20'>
          <div className='text-center'>
            <h1 className='text-[64px] text-black dark:text-white leading-[110%]'>
              Join Our Next<br /><span className='text-[#A300D1]'>Leadership</span> Event
            </h1>
            <p className='text-[#8C8C8C] my-10 text-[24px] w-full md:w-2/3 mx-auto'>
              Our vision is to build a worldwide network where leadership is nurtured through continuous personal development, spiritual harmony, and collective empowerment.
            </p>

            <p className='text-black dark:text-white tracking-[18px] font-bold text-[24px]'>STARTS IN</p>
            <div className='flex w-full justify-center md:w-[500px] mx-auto mt-5'>
              <div className='text-[48px] dark:text-[#D9B1FF] p-2 px-4 rounded-[10px] dark:bg-[rgba(200,143,240,0.15)] bg-[rgba(74,0,213,0.15)] text-[#4A00D5]'>19</div>
              <div className='text-[48px] dark:text-white p-2 px-4'>:</div>
              <div className='text-[48px] dark:text-[#D9B1FF] p-2 px-4 rounded-[10px] dark:bg-[rgba(200,143,240,0.15)] bg-[rgba(74,0,213,0.15)] text-[#4A00D5]'>21</div>
              <div className='text-[48px] dark:text-white p-2 px-4'>:</div>
              <div className='text-[48px] dark:text-[#D9B1FF] p-2 px-4 rounded-[10px] dark:bg-[rgba(200,143,240,0.15)] bg-[rgba(74,0,213,0.15)] text-[#4A00D5]'>43</div>
              <div className='text-[48px] dark:text-white p-2 px-4'>:</div>
              <div className='text-[48px] dark:text-[#D9B1FF] p-2 px-4 rounded-[10px] dark:bg-[rgba(200,143,240,0.15)] bg-[rgba(74,0,213,0.15)] text-[#4A00D5]'>06</div>
            </div>
            <div className='flex w-full justify-center md:w-[500px] mx-auto mt-5'>
              <div className='text-[14px] dark:text-white p-2 px-4 rounded-[10px]'>DAYS</div>
              <div className='text-[14px] dark:text-white p-2 px-4'>&nbsp;&nbsp;</div>
              <div className='text-[14px] dark:text-white p-2 px-4 rounded-[10px]'>HOURS</div>
              <div className='text-[14px] dark:text-white p-2 px-4'>&nbsp;&nbsp;</div>
              <div className='text-[14px] dark:text-white p-2 px-4 rounded-[10px]'>MINUTES</div>
              <div className='text-[14px] dark:text-white p-2 px-4'>&nbsp;&nbsp;</div>
              <div className='text-[14px] dark:text-white p-2 px-4 rounded-[10px]'>SECONDS</div>
            </div>
          </div>
          <div className='mt-20'>
            <div className='rounded-[20px] overflow-hidden'>
              <iframe className='w-full h-[700px]' src="https://www.youtube.com/embed/rYQgy8QDEBI?si=0hQPmhjtdOqw7wpX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>

        {/* Join Community */}
        <div className='px-10 py-20'>
          <div className='bg-[linear-gradient(254.8deg,#4A00D5_0%,#27006F_100%)] rounded-[20px] p-10'>
            <div className='flex items-center gap-20'>
              <div className="flex-1">
                <h1 className='text-[64px] text-white leading-[110%]'>
                  <span className='text-[#A300D1]'>Join</span> the Eternal Warriors Community
                </h1>
                <p className='text-[#FFFFFF] my-10 text-[24px]'>
                  Our vision is to build a worldwide network where leadership is nurtured through continuous personal development, spiritual harmony, and collective empowerment.
                </p>
                <div className='mt-10 flex gap-5 w-3/4'>
                  <button className='bg-[#D9B1FF] flex-1 text-black font-bold py-4 px-3 rounded-[10px]'>
                    Sign Up
                  </button>
                  <button className='border border-[##D9B1FF] flex-1 text-[#D9B1FF] font-bold py-4 px-3 rounded-[10px]'>
                    Login In Now
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <div className='rounded-[20px] overflow-hidden'>
                  <img src='/assets/images/join-right.png' className='w-full' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}