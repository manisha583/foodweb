import { useState } from "react";
import dishes from "../data/food";
function FoodCard() {
  const [quantities, setQuantities] = useState({});

  const addItem = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: 1 }));
  };

  const increment = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decrement = (id) => {
    setQuantities((prev) => {
      const newQty = prev[id] - 1;
      if (newQty <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newQty };
    });
  };

  return (
    <section>
      <div className="mt-10 ">
        <h1 className="font-semibold text-gray-800 text-3xl px-1">
          Popular Dishes
        </h1>
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 px-2 ">
          {dishes.map((dish) => {
            const qty = quantities[dish.id];

            return (
              <div
                key={dish.id}
                className="  bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-[180px] md:h-[200px]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />

                  {!qty ? (
                    <button
                      onClick={() => addItem(dish.id)}
                      className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 transition"
                    >
                      +
                    </button>
                  ) : (
                    <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-white rounded-full shadow-md px-2 py-1">
                      <button
                        onClick={() => decrement(dish.id)}
                        className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center"
                      >
                        −
                      </button>
                      <span className="text-sm font-medium w-4 text-center">
                        {qty}
                      </span>
                      <button
                        onClick={() => increment(dish.id)}
                        className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
                <div className="p-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">{dish.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500 mt-0 line-clamp-1">
                    {dish.desc}
                  </p>
                  <p className="text-orange-500 font-semibold mt-0.5 ">
                    {dish.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default FoodCard;
