import React, {  useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify';

const Add = ({url}) => {

    const[image, setImage]=useState(false);
    const[data,setData]=useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
    })

    const onChangeHandler = (event) =>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data => ({...data,[name]:value}))
    }

    const onSubmitHandler = async (event) =>{
        event.preventDefault();
        const formData=new FormData();
        formData.append("name",data.name);
        formData.append("description",data.description);
        formData.append("price",Number(data.price));
        formData.append("category",data.category);
        formData.append("image",image);
        const response=await axios.post(`${url}/api/food/add`,formData);
        if(response.data.success){
            setData({
                name:"",
                description:"",
                price:"",
                category:"Salad"
            })
            setImage(false);
            toast.success(response.data.message)
        }
        else{
           toast.error(response.data.message)
        }
    }

  return (
    <div className=' w-[70%] ml-[max(5vw,25px)] mt-12 text-[#6d6d6d] text-base'>
        <form className='flex flex-col gap-5' onSubmit={onSubmitHandler}>
            <div className="add-img-upload flex flex-col gap-2">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} className='w-32' alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
            </div>
            <div className="add-product-name flex flex-col gap-2 w-[max(40%,280px)]">
                <p>Product Name</p>
                <input type="text" onChange={onChangeHandler} value={data.name} className='p-[10px] border border-slate-300' name='name' placeholder='Type here' />
            </div>
            <div className="add-product-desc  flex flex-col gap-2  w-[max(40%,280px)]">
                <p>Product Dscription</p>
                <textarea name="description" onChange={onChangeHandler} value={data.description} className='p-[10px] border border-slate-300' rows="6" placeholder='Write content here' required></textarea>
            </div>
            <div className="add-category-price flex gap-7">
                <div className="add-category flex flex-col gap-[10px]">
                    <p>Product Cateory</p>
                    <select name="category" onChange={onChangeHandler} value={data.category} className='max-w-32 p-[10px] border border-slate-300' id="">
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className="add-price flex flex-col gap-[10px]">
                    <p>Product Price</p>
                    <input type="Number" onChange={onChangeHandler} value={data.price} className='max-w-32 p-[10px] border border-slate-300' name='price' placeholder='$20' />
                </div>
            </div>
            <button type='submit' className='add-btn max-w-32 border-none p-[10px] bg-black text-white cursor-pointer'>ADD</button>
        </form>
    </div>
  )
}

export default Add