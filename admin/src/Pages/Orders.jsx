import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from "react-toastify"
import { assets } from '../assets/assets'

const Orders = ({ url }) => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data)
    }
    else {
      toast.error("Error");
    }
  }


  const statusHandler = async (event, orderId) => {
    const response=await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if(response.data.success){
      await fetchAllOrders();
    }
  }

  useEffect(()=>{
    fetchAllOrders();
  },[])

  return (
    <div className='order add'>
      <h3>Order page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item grid grid-cols-custom3 items-start gap-7 border border-[tomato] p-5 my-7 text-sm text-[#505050] max-lg:text-xs max-lg:grid-cols-custom4 max-lg:py-4 max-lg:px-2">
            <img src={assets.parcel_icon} className='max-lg:w-10' alt="" />
            <div>
              <p className="order-item-food font-semibold">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity
                  }
                  else {
                    return item.name + " x " + item.quantity + " , "
                  }
                })}
              </p>
              <p className="order-item-name font-semibold mt-7 mb-1">{order.address.firstName + " " + order.address.lastName}</p>
              <div className="order-item-address mb-[10px]">
                <p>{order.address.street}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
              </div>
              <p className="order-item-phone">{order.address.phone}</p>
            </div>
              <p>Items: {order.items.length}</p>
              <p>${order.amount}</p>
              <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className='bg-[#ffe8e4] border border-[tomato] w-[max(10vw,120px)] p-[10px] outline-none max-lg:p-1 max-lg:text-xs'>
                <option value="Food Processing">Food Processing</option>
                <option value="Out For Delivery">Out For Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders