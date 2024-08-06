import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

const List = ({url}) => {

  const [list,setList] = useState([])

  const fetchList = async ()=>{
    const response=await axios.get(`${url}/api/food/list`);
    if(response.data.success){
      setList(response.data.data);
    }
    else{
      toast.error("error")
    }
  }

  const removeFood = async(foodId)=>{
    const response=await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error(response.data.message)
    }
  }

  useEffect(()=>{
    fetchList()
  },[])

  return (
    <div className='list add w-[70%] ml-[max(5vw,25px)] mt-12 text-[#6d6d6d] text-base flex flex-col gap-[10]'>
        <p className=''>All Foods List</p>
        <div className="lis-table">
          <div className="list-table-format grid grid-cols-custom2 items-center gap-[10px] px-4 py-3 border border-[#cacaca] text-sm max-sm:grid-cols-custom1 max-sm:gap-4 max-sm:hidden">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          {list.map((item,index)=>{
            return (
              <div key={index} className="list-table-format grid grid-cols-custom2 items-center gap-[10px] px-4 py-3 border border-[#cacaca] text-sm max-sm:grid-cols-custom1 max-sm:gap-4">
                <img src={`${url}/images/`+item.image} className='w-[50px]' alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <p className='cursor-pointer' onClick={()=>removeFood(item._id)}>X</p>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default List