import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='m-auto mt-24 text-[max(3vw,20px)] text-center font-medium' id='app-download'>
        <p>For Better Experience Download <br/>FoodyME App</p>
        <div className='flex justify-center gap-[max(2vw,10px)] mt-10'>
            <img src={assets.play_store} className='w-[max(30vw,120px)] max-w-44 cursor-pointer transform transition-transform hover:scale-105 ' alt="" />
            <img src={assets.app_store} className='w-[max(30vw,120px)] max-w-44 cursor-pointer transform transition-transform hover:scale-105 ' alt="" /></div>
    </div>
  )
}

export default AppDownload