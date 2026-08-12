import img1 from "../assets/img1.jpg";

function Hero() {
  return (
    <section className="py-1 px-1">
      <div
        className="h-[48vw]  sm:h-[45vw] md:h-[34vw]
             min-h-[220px] sm:min-h-[350px] md:min-h-[480px]
             rounded-2xl bg-cover bg-center flex items-center "
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="ml-4 animate-fade-in sm:ml-8 md:ml-12 max-w-[180px] sm:max-w-sm md:max-w-lg text-white md:mt-25 ">
          <h1 className="  font-bold text-[24px] sm:text-3xl md:text-[55px] leading-tight [text-shadow:2px_2px_8px_rgba(0,0,0,0.5)]">
            Order your favourite food here
          </h1>
          <p className="mt-2 text-grey-700 [text-shadow:1px_1px_6px_rgba(0,0,0,0.5)] hidden sm:flex">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            saepe expedita aliquam ad excepturi adipisci inventore officiis quia
            laboriosam commodi.
          </p>
          <button className="hidden sm:block sm:mt-5 rounded-full bg-white px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm md:text-[15px] text-black cursor-pointer hover:text-orange-700 ">
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
}
export default Hero;
