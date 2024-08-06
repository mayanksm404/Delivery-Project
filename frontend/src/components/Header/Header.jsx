import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="header h-[34vw] m-7 bg-[url('header_img.png')] bg-no-repeat bg-contain relative">
        <div className="header-content absolute flex flex-col items-start gap-[1.5vw] max-w-[65%] bottom-[10%] left-[6vw] animate-border-fade max-lg:max-w-[45%] max-md:max-w-[55%]">
          <h2 className='font-medium text-[max(4.5vw,22px)] text-white'>Order your favourite food here</h2>
          <p className='text-white text-[1vw] max-md:hidden'>Choose from a diverse menu featuring a detectable array of dishes crafted with the finest ingredients culinary expertise. Our mission is to satisfy four cravings and evaluate your dining experience, one delicious meal at a time.</p>
          <button className='b-none text-slate-500 px-[2.3vw] py-[1vw] bg-white text-[max(1vw,13px)] rounded-3xl max-md:py-[2vw] max-md:px-[4vw]'>View Menu</button>
        </div>
      </div>
    </div>
  )
}

export default Header