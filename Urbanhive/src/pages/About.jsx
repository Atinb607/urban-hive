import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
    <div className='text-3xl text-center pt-8 border-t'>
      <Title text1={'ABOUT '} text2={'US'}/>
    </div>

    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>UrbanHive began as a small startup in 2020 with a simple mission: to make quality products more accessible to modern shoppers. What started as a passion project among friends quickly grew into a trusted online destination for thousands.</p>
          <p>At UrbanHive, we believe in connecting people with products that enhance everyday life. Whether you're shopping for the latest fashion trends, home essentials, tech gadgets, or lifestyle accessories, we strive to bring you quality, affordability, and convenience all in one place.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to simplify online shopping by offering curated, high-quality products that fit seamlessly into modern lifestyles. At UrbanHive, we aim to inspire trust, convenience, and satisfaction in every customer experience.</p>
      </div>
    </div>

    <div className='text-2xl py-4'>
      <Title text1={'WHY '} text2={'CHOOSE US'}/>
    </div>

    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
        <b>Quality Assurance</b>
        <p className='text-gray-600'>At UrbanHive, quality is at the heart of everything we do. Every product is carefully sourced and inspected to ensure it meets our high standards before it reaches your doorstep.</p>
      </div>
      <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
        <b>Convenience</b>
        <p className='text-gray-600'>We’re committed to making your shopping experience as smooth and hassle-free as possible. With intuitive navigation, fast shipping, and secure checkout, UrbanHive puts convenience at your fingertips.</p>
      </div>
      <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
        <b>Exceptional Customer Service</b>
        <p className='text-gray-600'>At UrbanHive, our customers come first. Our dedicated support team is always here to assist you—quickly, kindly, and with a commitment to your satisfaction. className='text-gray-600'</p>
      </div>
    </div>
    <NewsletterBox/>
    </div>
    
  )
}

export default About