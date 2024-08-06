import React from 'react'
import Logo from '/logo.jpg'
import { IoSearchSharp } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";
import { LuMenu } from "react-icons/lu";
import { FaUser } from "react-icons/fa";


export const Header = () => {
  return (
    <div className='header p-4 bg-cyan-400	'>
<div className='contaner'>
    <nav className='navbar flex  items-center justify-between '>
<div className='logbag  flex gap-2 items-center'>
<img className='ounded-ss-full w-10 rounded-3xl' src={Logo} alt="logo" />
<p className=' text-lg		 font-bold'>BOOK SHOP</p>
</div>

<ul className="navbar__collection flex gap-5">
  
    <a href="#">
        <li class="navbar__item hover:decoration-gray-300 text-lg	">
                        <span>HOME</span>
                    </li>
                    </a>

                    <a href="#">
        <li class="navbar__item hover:decoration-gray-300 text-lg		">
                        <span>SALE</span>
                    </li>
                    </a>

                    <a href="#">
        <li class="navbar__item hover:decoration-gray-300 text-lg		">
                        <span>PRODUCT</span>
                    </li>
                    </a>

                    <a href="#">
        <li class="navbar__item hover:decoration-gray-300 text-lg	">
                        <span>FOOTER</span>
                    </li>
                    </a>

          

    </ul>

<div className='navbar__bag gap-5 '>
    <button className='navbar__btn p-2  transition-transform rounded-2xl  hover:bg-cyan-300	 hover:col-auto active:bg-cyan-200'><FaUser  className='navbar__icon'/>
    </button>
<button className='navbar__btn p-2  transition-transform rounded-2xl  hover:bg-cyan-300	 hover:col-auto active:bg-cyan-200'><IoSearchSharp className='navbar__icon' />
</button>
<button className='navbar__btn p-2  transition-transform rounded-2xl  hover:bg-cyan-300	 hover:col-auto active:bg-cyan-200'><HiShoppingCart  className='navbar__icon'/>
</button>
<button className='navbar__btn p-2  uz transition-transform rounded-2xl    hover:col-auto active:bg-cyan-200'><LuMenu className='navbar__icon' />
</button>


</div>


    </nav>
</div>
    </div>
  )
}
