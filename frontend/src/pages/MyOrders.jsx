import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
import { assets } from '../assets/assets'

const MyOrders = () => {

    const {url,token}=useContext(StoreContext)
    const [data,setData]=useState([])
    

    const fetchOrders = async () => {
        const response = await axios.post(url+"/api/order/userorder",{},{headers:{token}})
        setData(response.data.data)
        console.log(response.data.data)
    }

    useEffect(()=>{
        if (token) {
            fetchOrders();
        }
    },[token])

  return (
    <div className='my-orders mx-0 my-12'>
        <h2 className='font-semibold text-lg'>My Orders</h2>
        <div className="container flex flex-col gap-5 mt-7">
            {data.map((order,index)=>{
                return (
                    <div key={index} className="my-orders-order grid grid-cols-custom3 items-center gap-7 text-sm py-2 px-5 text-[#454545] border border-[tomato] max-md1:grid-cols-custom4 max-md1:gap-x-1 max-md1:text-xs">
                        <img src={assets.parcel_icon} className='w-12' alt="" />
                        <p>{order.items.map((item,index)=>{
                            if (index === order.items.length-1) {
                                return item.name+" x "+item.quantity
                            }
                            else{
                                return item.name+" x "+item.quantity+" , "
                            }
                        })}</p>
                        <p>${order.amount}.00</p>
                        <p>Items: {order.items.length}</p>
                        <p><span className='text-[tomato]'>&#x25cf;</span><b className='font-medium text-[#454545]'>{order.status}</b></p>
                        <button onClick={()=>fetchOrders()} className='border-none py-3 rounded bg-[#ffe1e1] cursor-pointer text-[#454545] max-md1:text-[10px]'>Track Order</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MyOrders