import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { RiShoppingCart2Fill } from 'react-icons/ri';



const Navbar = ({items}) => {

  
  return (
    <header className="sticky top-0 z-50">
      
      <div className="bg-blue-600 p-4 flex align-middle">
        <img src="/assets/log.png" alt="" className='inline-block mr-4 w-10 h-10'/>
        <div className="flex w-full justify-center">
          <input className="outline-none p-1 w-2/5" type="search" name="search" id="search" placeholder="Search for products, brands and more" /> 
           {/* onChange={(e)=>{setUserSearch(e.target.value)}} */}
          <BsSearch className="w-6 h-10 bg-white pr-1 text-blue-700 font-bold"/>
        </div>
        <p className="flex text-white font-bold items-center mr-8 cursor-pointer"><RiShoppingCart2Fill className="w-6 h-6 text-white"/>Cart</p> 
        <button className="bg-white text-blue-600 font-bold px-4 rounded-full">Login</button>

      </div>
    </header>
    
  )
}

export default Navbar
