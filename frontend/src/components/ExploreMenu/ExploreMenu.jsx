import React from 'react'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='flex flex-col gap-5 max-lg:max-w-full text-xs' id='explore-menu'>
        <h1 className='text-neutral-800 font-medium text-[max(3.5vw,22px)]'>Explore our menu</h1>
        <p className='max-w-[60%]'>Choose from a diverse menu featuring a detectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className="explore-menu-list flex justify-between items-center gap-7 mx-0 my-5 text-center overflow-x-scroll no-scrollbar">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} id={index} className="explore-menu-list-item">
                        <img src={item.menu_image} className={category===item.menu_name?"active w-[7.5vw] min-w-20 cursor-pointer rounded-[50%] p-1  border-orange-800 border-2":"w-[7.5vw] min-w-20 cursor-pointer rounded-[50%]"} alt="" />
                        <p className='mt-2 text-[#747474] text-[max(1.4w,16px)] cursor-pointer'>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr className='mx-0 my-2 h-[2px] bg-slate-200 border-none'/>
    </div>
  )
}

export default ExploreMenu