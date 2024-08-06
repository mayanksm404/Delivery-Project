import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext)

  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}))
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if (cartItems[item._id]>0) {
        let itemInfo = item;
        itemInfo["quantity"]=cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2,
    }
    let response=await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    if(response.data.success){
      const {session_url}=response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Error")
    }
  }

  const navigate = useNavigate();
  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }
    else if(getTotalCartAmount()===0){
      navigate('cart')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className='place-order flex items-start justify-between ga-12 mt-24 ' action="">
      <div className="place-order-left w-full max-w-[max(30%,500px)]">
        <p className="title text-[30px] font-semibold mb-12">Delivery Information</p>
        <div className="multi-fields flex gap-[10px]">
          <input required type="text" name='firstName' placeholder='First name' onChange={onChangeHandler} value={data.firstName} className='mb-4 w-full border border-[#c5c5c5] rounded outline-[tomato]' />
          <input required type="text" name='lastName' placeholder='Last name' onChange={onChangeHandler} value={data.lastName} className='mb-4 w-full border border-[#c5c5c5] rounded outline-[tomato]'/>
        </div>
        <input required type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email address' className='mb-4 w-full border border-[#c5c5c5] rounded outline-[tomato]'/>
        <input required type="text" name='street' onChange={onChangeHandler} value={data.street} placeholder='Street' className='mb-4 w-full border border-[#c5c5c5] rounded outline-[tomato]'/>
        <div className="multi-fields flex gap-[10px]">
          <input required type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='City' className='mb-4 w-full border border-[#c5c5c5] rounded outline-[tomato]'/>
          <input required type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='State' className='mb-4 w-full border border-[#c5c5c5] rounded outline-[tomato]'/>
        </div>
        <div className="multi-fields flex gap-[10px]">
          <input required type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip code' className='mb-4 w-full border border-[#c5c5c5] rounded outline-[tomato]'/>
          <input required type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' className='mb-4 w-full border border-[#c5c5c5] rounded outline-[tomato]' />
        </div>
        <input required type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone'className='mb-4 w-full border border-[#c5c5c5] rounded outline-[tomato]' />
      </div>
      <div className="place-order-right w-full max-w-[max(40%,500px)]">
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
            <button type='submit' className='border-none text-white bg-[tomato] w-[max(15vw,200px)] py-3 rounded cursor-pointer'>PROCEED TO PAYMENT</button>
          </div>
      </div>
    </form>
  )
}

export default PlaceOrder