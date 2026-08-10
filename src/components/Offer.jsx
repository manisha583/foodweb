import dis from "../assets/dis.png";
import combo from "../assets/combo.png";

import { FaArrowCircleRight } from "react-icons/fa";
function Offer() {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-stretch mt-7 px-1 ">
      <div className="relative flex items-center py-2 bg-orange-100 rounded-2xl justify-between flex-1 h-[150px]">
        <div className="px-4 leading-6">
          <h1 className="font-bold text-[10px] text-orange-700">
            EXCLUSIVE OFFER
          </h1>

          <h2 className="font-medium text-[20px] text-gray-700">
            Flat 30% OFF
          </h2>

          <p className="text-gray-600 text-[13px]">On Your First Order</p>

          <button className="bg-orange-600 text-white font-semibold text-[13px] px-2 rounded-2xl py-1 my-2 cursor-pointer flex items-center gap-2">
            Order Now
            <FaArrowCircleRight className="text-[16px]" />
          </button>
          <div className="absolute -top-2 right-0 bg-red-600 text-white text-s font-bold rounded-full h-15 w-15 flex items-center justify-center text-center lg:">
            30% OFF
          </div>
        </div>

        <img src={dis} alt="discount" className="h-[100px] w-[150px] mx-4 " />
      </div>

      <div className="relative flex items-center py-2 bg-green-100 rounded-2xl justify-between flex-1 h-[150px]">
        <div className="px-4">
          <h1 className="font-bold text-[10px] text-green-700 pt-3">
            WEEKEND SPECIAL
          </h1>

          <h2 className="font-medium text-[20px] text-gray-700">
            Family Combo
          </h2>

          <p className="w-[200px] text-gray-600 text-[13px] lg:w-[300px]">
            Enjoy with your family with our Special combo deals.
          </p>

          <button className="bg-green-700 text-white font-semibold text-[13px] px-2 rounded-2xl py-1 my-2 cursor-pointer flex items-center gap-2">
            Order Now
            <FaArrowCircleRight className="text-[16px]" />
          </button>
        </div>

        <img src={combo} alt="combo" className="h-[100px] w-[150px] mr-7" />
        <div className="absolute -top-2 -right-1 bg-green-700 text-white text-s font-bold rounded-full h-15 w-15 flex items-center justify-center text-center">
          30% OFF
        </div>
      </div>
    </div>
  );
}
export default Offer;

/* <div className="absolute -top-2 right-0 bg-red-600 text-white text-s font-bold rounded-full h-15 w-15 flex items-center justify-center text-center">
          30% OFF
        </div> */
/* <div className="absolute -top-2 -right-1 bg-green-700 text-white text-s font-bold rounded-full h-15 w-15 flex items-center justify-center text-center">
          30% OFF
        </div> */
