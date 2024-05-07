import React, { useEffect, useState } from "react";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { MdAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import AccountMenu from "./navbar/AccountMenu";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate()
  const [isFixed, setIsFixed] = useState(false);

  // Function to check the scroll position
  const handleScroll = () => {
    const position = window.pageYOffset;
    setIsFixed(position > 0); // Fixed when not at the top
  };

  // Set up event listener for scrolling
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <div className={`${isFixed ? 'fixed w-full top-0 left-0 bg-white shadow-lg' : 'relative'} z-10`}>
      <div className="w-[90%] mx-auto grid grid-cols-3 my-6">
        <div>
          <h1 className="text-3xl font-bold">SKinStore</h1>
          <p className="text-sm">
            part of the <span className="text-bold">LOOKFANTASTIC</span> group
          </p>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for a product or brand..."
            className="w-full  border-2 px-2 py-2"
          />
          <CiSearch className="absolute right-1 top-1 rounded-md text-3xl inline hover:bg-slate-300"/>
        </div>
        <div className="flex justify-center items-center ">
          <div className="mr-4 cursor-pointer">
            <AccountMenu/>
          </div>
          <button onClick={()=>navigate('/cart')} className="ml-8 cursor-pointer text-xl">
            <PiShoppingCartSimpleDuotone className="inline text-3xl" /><sup className="bg-red-600 text-white py-1 px-2 rounded-full">2</sup> Cart
          </button>
        </div>
      </div>

      <hr className=" bg-slate-500 h-[2px] my-4"/>
      <div className="flex w-[90%] mx-auto justify-between flex-wrap text-sm pb-4">
        <p className="hover:bg-black hover:text-white px-2 cursor-pointer">Discover Dermstore</p>
        <p className="hover:bg-black hover:text-white px-2 cursor-pointer">Brands</p>
        <p className="hover:bg-black hover:text-white px-2 cursor-pointer">Sale</p>
        <p className="hover:bg-black hover:text-white px-2 cursor-pointer">Skin Care</p>
        <p className="hover:bg-black hover:text-white px-2 cursor-pointer">New</p>
        <p className="hover:bg-black hover:text-white px-2 cursor-pointer">Makeup</p>
        <p className="hover:bg-black hover:text-white px-2 cursor-pointer">Hair</p>
        <p className="hover:bg-black hover:text-white px-2 cursor-pointer">Tools</p>
        <p className="hover:bg-black hover:text-white px-2 cursor-pointer">Bath & Body</p>
        <p className="hover:bg-black hover:text-white px-2 cursor-pointer">Fragrance</p>
        <p className="hover:bg-black hover:text-white px-2 cursor-pointer">Sun Care</p>
        <p className="hover:bg-black hover:text-white px-2 cursor-pointer">Self-Care</p>
        <p className="hover:bg-black hover:text-white px-2 cursor-pointer">Blog</p>
        <p></p>
      </div>
    </div>
    </>
  );
}

export default Navbar;
