import React, { useRef } from 'react'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import Slider from 'react-slick'

const settings = {
  dots: true,
  centerMode: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const mData = [
  { title: "Center for Creative Leadership", image: '/assets/images/leadership1.png' },
  { title: "Leadership and communication", image: '/assets/images/leadership2.png' },
  { title: "Executive Development Program", image: '/assets/images/leadership3.png' },
]

export default function Leadership() {
  const sliderRef = useRef(null);
  return (
    <div className='w-full max-w-full px-10 pt-20'>
      <div className='text-center'>
        <h1 className='text-[64px] text-black dark:text-white leading-[110%]'>Your Path to <span className='text-[#A300D1]'>Leadership</span><br />Begins Here</h1>
        <p className='text-[#8C8C8C] my-10 text-[24px]'>Our vision is to build a worldwide network where leadership is nurtured through continuous personal development, spiritual harmony, and collective empowerment. We aim to inspire individuals to lead with love, integrity, and purpose, fostering positive change in their communities and beyond.</p>
      </div>
      <div className=''>
        <Slider ref={sliderRef} {...settings}>
          {
            mData?.map((ele, i) => (
              <div className='p-3'>
                <div key={i} className="bg-white border dark:border-none dark:bg-[#160029] p-3 rounded-[20px]" style={{ boxShadow: "0px 20px 25px rgba(0, 0, 0, 0.03)" }} Z>
                  <img src={ele.image} className='w-full' />
                  <p className='text-[30px] mt-2 dark:text-white'>{ele.title}</p>
                  <p className='text-[#8C8C8C] mt-2'>Our vision is to build a worldwide network where leadership is nurtured through continuous personal development, </p>
                  <button className='bg-[#4A00D5] dark:bg-[#B266FF] mt-3 w-full flex items-center justify-center gap-3 py-4 rounded-[10px] text-white'>Enrol now <img src="/assets/images/enroll-btn-icon.png" /></button>
                </div>
              </div>
            ))
          }
        </Slider>
        <div className='mt-10 flex justify-center items-center gap-5'>
          <button className='bg-[rgba(163,0,209,0.05)] dark:bg-[rgba(255,255,255,0.05)] dark:text-[#C88FF0] rounded-full p-4 text-[#A300D1]' onClick={() => sliderRef?.current?.slickPrev()}>
            <MdKeyboardArrowLeft size={32} />
          </button>
          <button className='bg-[rgba(163,0,209,0.05)] dark:bg-[rgba(255,255,255,0.05)] dark:text-[#C88FF0] rounded-full p-4 text-[#A300D1]' onClick={() => sliderRef?.current?.slickNext()}>
            <MdKeyboardArrowRight size={32} />
          </button>
        </div>
      </div>
    </div>
  )
}
