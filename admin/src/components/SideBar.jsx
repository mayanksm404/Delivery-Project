import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const SideBar = () => {

    const [active,setActive] = useState("Add-Item")

  return (
    <div className='sidebar w-[18%] min-h-[100vh] border-[1.5px] border-[#a9a9a9] border-t-0 text-[max(1vw,10px)]'>
        <div className="sidebar-options pt-12 pl-[20%] flex flex-col gap-5">
            <NavLink to='/add' onClick={()=>setActive("Add-Item")} className={active==="Add-Item"?"sidebar-option flex items-center gap-3 border border-[tomato] border-r-0 px-[10px] py-2 cursor-pointer rounded-l-[3px] bg-[#fff0ed]":"sidebar-option flex items-center gap-3 border border-[#a9a9a9] border-r-0 px-[10px] py-2 cursor-pointer rounded-l-[3px]"}>
                <img src={assets.add_icon} alt="" />
                <p className='max-md1:hidden'>Add Items</p>
            </NavLink>
            <NavLink to='/list'  onClick={()=>setActive("List-Item")} className={active==="List-Item"?"sidebar-option flex items-center gap-3 border border-[tomato] border-r-0 px-[10px] py-2 cursor-pointer rounded-l-[3px] bg-[#fff0ed]":"sidebar-option flex items-center gap-3 border border-[#a9a9a9] border-r-0 px-[10px] py-2 cursor-pointer rounded-l-[3px]"}>
                <img src={assets.order_icon} alt="" />
                <p className='max-md1:hidden'>List Items</p>
            </NavLink>
            <NavLink to='/orders'  onClick={()=>setActive("Order-Item")} className={active==="Order-Item"?"sidebar-option flex items-center gap-3 border border-[tomato] border-r-0 px-[10px] py-2 cursor-pointer rounded-l-[3px] bg-[#fff0ed]":"sidebar-option flex items-center gap-3 border border-[#a9a9a9] border-r-0 px-[10px] py-2 cursor-pointer rounded-l-[3px]"}>
                <img src={assets.order_icon} alt="" />
                <p className='max-md1:hidden'>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default SideBar