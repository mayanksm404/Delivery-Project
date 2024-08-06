import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {cartItems,food_list,removeFromCart, getTotalCartAmount,url} = useContext(StoreContext)

  const navigate=useNavigate()

  return (
    <div className='cart mt-24'>
        <div className="cart-items">
          <div className="cart-items-title grid grid-cols-custom2 items-center text-[grey] text-[max(1vw,12px)]">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <br />
          <hr className='h-[1px] bg-[#e2e2e2] border-none' />
          {food_list.map((item,index)=>{
            if(cartItems[item._id]>0){
              return(
                <div>
                  <div className="cart-items-item grid grid-cols-custom2 items-center  text-[max(1vw,12px)] my-2 text-black">
                    <img src={url+"/images/"+item.image} className='w-12' alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price*cartItems[item._id]}</p>
                    <p onClick={()=>removeFromCart(item._id)} className='cursor-pointer'>x</p>
                  </div>
                  <hr className='h-[1px] bg-[#e2e2e2] border-none' />
                </div>
              )
            }
          })}
        </div>
        <div className="cart-bottom mt-20 flex justify-between gap-[max(12vw,20px)] max-md:flex-col-reverse">
          <div className="cart-total flex-1 flex flex-col gap-5">
            <h2 className='text-xl font-semibold'>Cart Totals</h2>
            <div>
              <div className="cart-total-details flex justify-between text-[#555] text-lg">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr className='my-[10px]' />
              <div className="cart-total-details flex justify-between text-[#555] text-lg ">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr className='my-[10px]' />
              <div className="cart-total-details flex justify-between text-[#555] text-lg">
                <b>Total</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
            </div>
            <button onClick={()=>navigate('/order')} className='border-none text-white bg-[tomato] w-[max(15vw,200px)] py-3 rounded cursor-pointer'>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode flex-1 max-md:justify-start">
            <div>
              <p className='text-[#555]'>If you have a promo code, Enter it here</p>
              <div className="cart-promocode-input mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded">
                <input type="text" className='bg-transparent border-none outline-none pl-[10px]' placeholder='promo code' />
                <button className='w-[max(10vw,150px)] px-1 py-3 bg-black border-none text-white rounded'>Submit</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cart