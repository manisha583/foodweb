import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
function Contact() {
  return (
    <section
      id="contact"
      className="relative left-1/2 right-1/2 mx-[-50vw] w-screen bg-gray-800"
    >
      <div className=" mt-10 py-5 flex justify-between items-center">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center gap-[40px] sm:gap-[200px] md:gap-[300px] lg:gap-[600px] xl:gap-[600px]">
          <div className="flex flex-col">
            <h1 className=" text-2xl font-bold text-orange-600">Foodie.</h1>
            <p className="max-w-90 text-gray-200 mt-2 line-clamp-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              numquam perspiciatis.
            </p>
            <div className="flex flex-row gap-4 mt-4">
              <a
                href="https://www.instagram.com/muffiin__99_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/manisha-magar-058b1336b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:text-white transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/manisha583"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:text-white transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <div>
            <h1 className="text-white text-[18px] font-semibold">
              GET IN TOUCH
            </h1>
            <p className="text-gray-200 mt-2">+977-9946926316</p>
            <p className="text-gray-200">manishap2060@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 text-center py-1">
        <p className=" text-gray-400 text-sm ">
          Copyright 2026 © Foodie.com - All Right Reserved.
        </p>
      </div>
    </section>
  );
}
export default Contact;
