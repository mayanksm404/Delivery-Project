import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'

const LoginPopup = ({setShowLogin}) => {

    const {url,setToken} = useContext(StoreContext)
    const [currState,setCurrState] =useState("Login")
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (event) =>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onLogin = async (event) =>{
        event.preventDefault();
        let newurl=url;
        if (currState=="Login") {
            newurl+="/api/user/login"
        }
        else{
            newurl+="/api/user/register"
        }
        const response=await axios.post(newurl,data)
        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false)
        }
        else{
            alert(response.data.message)
        }
    }

    // useEffect(()=>{
    //     console.log(data)
    // },[data])

  return (
    <div className='Login-popup absolute z-[1] w-full h-full bg-[#00000090] grid'>
        <form onSubmit={onLogin} className='login-popup-cont place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-6 px-[30px] py-[25px] rounded-lg text-[14px] animate-fadeIn'>
            <div className="login-popup-title flex justify-between items-center">
                <h2 className='text-lg font-semibold'>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} className='w-4 cursor-pointer ' src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input flex flex-col gap-5 ">
                {currState==="Login"?<></>:<input type="text" placeholder='Your name' name='name' onChange={onChangeHandler} value={data.name} className='outline-none border border-[#c9c9c9] p-[10px] rounded' required />}
                <input type="email" name='email' onChange={onChangeHandler} value={data.email} className='outline-none border border-[#c9c9c9] p-[10px] rounded' placeholder='Your email' required />
                <input type="password" name='password' onChange={onChangeHandler} value={data.password} className='outline-none border border-[#c9c9c9] p-[10px] rounded' placeholder='Password' required />
            </div>
            <button className='border-none p-[10px] rounded text-white bg-[tomato] text-xs cursor-pointer' type='submit'>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition flex items-start gap-2 mt-[-15px]">
                <input type="checkbox" className='mt-[5px]' required />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"
            ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")} className='text-[tomato] font-medium cursor-pointer'>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrState("Login")} className='text-[tomato] font-medium cursor-pointer'>Login here</span></p>}
        </form>
    </div>
  )
}

export default LoginPopup