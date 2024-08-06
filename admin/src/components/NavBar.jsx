import React from 'react'
import { assets } from '../assets/assets'

const NavBar = () => {
  return (
    <div className='navbar flex justify-between items-center py-2 px-[4%]'>
        <img src={assets.logo} className='logo w-[max(10%,80px)]' alt="" />
        <img src={assets.profile_image} className='profile w-10' alt="" />
    </div>
  )
}

export default NavBar