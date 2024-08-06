import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 px-[8vw] py-5 pt-20 mt-24' id='footer'>
        <div className='w-full grid grid-cols-custom gap-20 max-md:flex max-md:flex-col max-md:gap-9'>
            <div className='flex flex-col items-start gap-5'>
                <img src={assets.logo} alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='flex items-start w-10 mr-4 gap-5 cursor-pointer'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='flex flex-col items-start gap-5'>
                <h2 className='text-white font-medium text-xl'>COMPANY</h2>
                <ul>
                    <li className='list-none mb-2 cursor-pointer'>Home</li>
                    <li className='list-none mb-2 cursor-pointer'>About us</li>
                    <li className='list-none mb-2 cursor-pointer'>Delivery</li>
                    <li className='list-none mb-2 cursor-pointer'>Privacy policy</li>
                </ul>
            </div>
            <div className='flex flex-col items-start gap-5'>
                <h2 className='text-white font-medium text-xl'>GET IN TOUCH</h2>
                <ul>
                    <li className='list-none mb-2 cursor-pointer'>+1-212-456-6789</li>
                    <li className='list-none mb-2 cursor-pointer'>contact@foodyme.com</li>
                </ul>
            </div>
        </div>
        <hr className='w-full h-[2px] my-5 bg-gray-500' />
        <p className='max-md:text-center'>Copyright 2024 FoodyME.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer