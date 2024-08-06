import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {

    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className='w-full m-auto rounded-2xl animate-border-fade bg-slate-50'>
        <div className='relative'>
            <img className='w-full rounded-t-2xl rounded-b-none' src={url+"/images/"+image} alt="" />
            {
                !cartItems[id] ? 
                <img onClick={()=>addToCart(id)} className='w-9 absolute bottom-4 right-4 cursor-pointer rounded-[50%]' src={assets.add_icon_white}/> 
                : 
                <div className='absolute bottom-4 right-4 flex items-center gap-2 p-2 rounded-[50px] bg-white'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} className='w-7 ' alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} className='w-7 ' alt="" />
                </div>
            }
        </div>
        <div className='p-5'>
            <div className='flex justify-between items-center mb-2'>
                <p className='text-lg font-medium'>{name}</p>
                <img src={assets.rating_starts} className='w-16' alt="" />
            </div>
            <p className='text-[#676767] text-xs'>{description}</p>
            <p className='text-[tomato] text-2xl font-medium my-2 mx-0'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem