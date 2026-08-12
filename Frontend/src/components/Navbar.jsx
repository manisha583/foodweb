import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setmenu] = useState("");
  return (
    <div className="flex items-center  justify-between my-4 px-1">
      <h1 className=" text-3xl font-bold text-orange-600">Foodie.</h1>

      <div className="hidden sm:flex text-gray-500 gap-13 font-semibold text-[18px] ">
        <a
          href="#home"
          onClick={() => setmenu("home")}
          className={
            menu === "home"
              ? "text-orange-600 underline underline-offset-4 decoration-2"
              : "text-gray-500 gap-13 font-semibold text-[18px] hover:text-gray-400"
          }
        >
          home
        </a>
        <a
          href="#menu"
          onClick={() => setmenu("menu")}
          className={
            menu === "menu"
              ? "text-orange-600 underline underline-offset-4 decoration-2"
              : "text-gray-500 gap-13 font-semibold text-[18px] hover:text-gray-400"
          }
        >
          menu
        </a>
        <a
          href="#contact"
          onClick={() => setmenu("contact")}
          className={
            menu === "contact"
              ? "text-orange-600 underline underline-offset-4 decoration-2"
              : "text-gray-500 gap-13 font-semibold text-[18px] hover:text-gray-400"
          }
        >
          contact us
        </a>
      </div>
      <div className="flex gap-7">
        <button className="cursor-pointer text-gray-600 ">
          <FiShoppingCart size={24} className="relative" />
        </button>
        <Link to="/auth">
          <button className="text-orange-600 border-2 border-orange-600 rounded-2xl px-3 py-1 font-semibold cursor-pointer hover:bg-orange-600 hover:text-white">
            sign up
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
