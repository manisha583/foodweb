import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
function Navbar() {
  return (
    <div className="flex items-center  justify-between my-4 px-1">
      <h1 className=" text-3xl font-bold text-orange-600">Foodie.</h1>

      <div className="hidden sm:flex text-gray-500 gap-13 font-semibold text-[18px]">
        <a
          href="#home"
          className="hover:text-orange-600 hover:underline underline-offset-4 decoration-2"
        >
          home
        </a>
        <a
          href="#menu"
          className="hover:text-orange-600 hover:underline underline-offset-4 decoration-2"
        >
          menu
        </a>
        <a
          href="#contact"
          className="hover:text-orange-600 hover:underline underline-offset-4 decoration-2"
        >
          contact us
        </a>
      </div>
      <div className="flex gap-7">
        <button className="cursor-pointer text-gray-600 ">
          <FiShoppingCart size={24} />
        </button>
        <button className="text-orange-600 border-2 border-orange-600 rounded-2xl px-3 py-1 font-semibold cursor-pointer hover:bg-orange-600 hover:text-white">
          sign in
        </button>
      </div>
    </div>
  );
}
export default Navbar;
