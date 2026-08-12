function About() {
  return (
    <div className=" my-9 mx-1 bg-img bg-[url(/foods/img2.jpg)] h-[390px] bg-cover bg-center bg-no-repeat text-white rounded-4xl lg:h-[300px]">
      <div className=" flex flex-col justify-center items-center bg-black/60 w-full h-full rounded-4xl">
        <h1 className="text-3xl ">About Us</h1>
        <div className="px-1  font-extralight lg:max-w-3xl">
          <p className="text-center py-2 leading-[22px]">
            <span className="font-medium">FOODIE</span> is the definitive way to
            experience exceptional food from the city's finest restaurants —
            delivered to your home, your office, or wherever life takes you.
          </p>
          <p className="text-center leading-[22px]">
            We understand that your time is your most valuable asset, and every
            moment deserves to be spent with intention. That's why we've crafted
            a seamless delivery experience built on precision, care, and an
            unwavering commitment to quality — so every meal arrives exactly as
            it should.
          </p>
        </div>
        <div className="my-3">
          <button className="my-3 bg-white text-gray-600 px-3 py-1 hover:text-green-500 rounded-[5px] cursor-pointer ">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}
export default About;
