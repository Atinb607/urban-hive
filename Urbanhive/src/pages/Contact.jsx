import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-3xl pt-10 border-t'>
        <Title text1={'CONTACT '} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500 '>1458 Market Street, Suite 300<br/>San Francisco, CA 94103<br/>United States</p>
          <p className='text-gray-500'>Customer Support: +1 (800) 123-4567 <br/>Email: urbanhive@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Urbanhive</p>
          <p className='text-gray-500 '>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact