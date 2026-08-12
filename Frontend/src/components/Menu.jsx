import pizza from "../assets/menu/pizza.jpg";
import sushi from "../assets/menu/sushi.jpg";
import desserts from "../assets/menu/desserts.jpg";
import sandwich from "../assets/menu/sandwich.jpg";
import noodles from "../assets/menu/noodles.jpg";
import pureVeg from "../assets/menu/pureveg.jpg";
import pasta from "../assets/menu/pasta.jpg";
import dumpling from "../assets/menu/dumplings.jpg";

function Menu({ category, setCategory }) {
  const menuList = [
    { id: 1, name: "Pizza", image: pizza },
    { id: 2, name: "Sushi", image: sushi },
    { id: 3, name: "Desserts", image: desserts },
    { id: 4, name: "Sandwich", image: sandwich },
    { id: 5, name: "noodles", image: noodles },
    { id: 6, name: "Pure Veg", image: pureVeg },
    { id: 7, name: "Pasta", image: pasta },
    { id: 8, name: "Dumpling", image: dumpling },
  ];
  return (
    <section id="menu" className="px-1">
      <h1 className="text-[22px] font-semibold text-gray-700 md:text-3xl">
        Explore our menu
      </h1>
      <p className="text-gray-500 flex mt-1 md:text-[18px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
        accusantium.
      </p>
      <div className="mt-5 flex gap-6 overflow-x-auto hide-scrollbar md:gap-8 ">
        {menuList.map((item) => (
          <div
            key={item.id}
            onClick={() =>
              setCategory((prev) => (prev === item.menu ? "All" : item.name))
            }
            className="flex flex-col items-center cursor-pointer shrink-0 text-grey-500"
          >
            <img
              src={item.image}
              alt={item.name}
              className={`w-20 h-20 md:w-30 md:h-30 rounded-full object-cover ${category === item.name ? " border-4 border-amber-600 p-0.5" : ""}`}
            />

            <p className="mt-3">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Menu;
