import React, { Profiler, useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import { Link, useNavigate} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("home");
  const {getTotalCartAmount,token, setToken}=useContext(StoreContext);

  const navigate= useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <div className='py-5 flex justify-between items-center'>
        <Link to='/'><img src={assets.logo} alt="" className="logo w-36 max-lg:w-36 max-md1:w-[120]" /></Link>
        <ul className="navbar-menu flex gap-5 text-base text-violet-800 max-lg:gap-5 max-lg:text-base max-md1:g-4 max-md1:text-xs  max-md:hidden">
			<Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active pb-[2px] border-b-2 border-b-violet-800 cursor-pointer":"cursor-pointer"} >home</Link>
			<a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active pb-[2px] border-b-2 border-b-violet-800 cursor-pointer":"cursor-pointer"}>menu</a>
			<a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active pb-[2px] border-b-2 border-b-violet-800 cursor-pointer":"cursor-pointer"}>mobile-app</a>
			<a href='#footer' onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active pb-[2px] border-b-2 border-b-violet-800 cursor-pointer":"cursor-pointer"}>contact us</a>
        </ul>
        <div className="navbar-right flex items-center gap-10 max-lg:gap-5 max-md1:gap-7">
            <img src={assets.search_icon} className='max-lg:w-6 md1:w-5' alt="" />
            <div className="navbar-search-icon relative">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0? "" : "absolute min-w-[10px] min-h-[10px] rounded-[5px] bg-orange-800 top-[-8px] right-[-8px]"}></div>
            </div>
            {!token
            ?<button onClick={()=>(setShowLogin(true))} className='bg-transparent text-base text-violet-800 border border-orange-700 px-7 py-2 rounded-[50px] cursor-pointer transition duration-300 ease-in-out transform hover:bg-slate-300 max-lg:px-6 max-lg:py-2 max-md1:px-5 max-md1:py-[7px] max-md1:text-[15px]'>Sign IN</button>
            :<div className="navbar-profile relative">
              <img src={assets.profile_icon} alt="" />
              <ul className="navprofile-dropdown absolute hidden right-0 z-[1] ">
                <li onClick={()=>navigate('/myorders')} className='flex justify-center items-center gap-[10px] cursor-pointer'><img src={assets.bag_icon} className='w-5' alt="" />
                <p className=' hover:text-[tomato]'>Orders</p></li>
                <hr />
                <li className='flex justify-center items-center gap-[10px] cursor-pointer' onClick={logout}><img src={assets.logout_icon} className='w-5' alt="" />
                <p className=' hover:text-[tomato]'>LogOut</p></li>
              </ul>
            </div>
            }
            
            </div>
    </div>
  )
}

export default Navbar