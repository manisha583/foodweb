import { useState } from "react";
function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);

    setLogin({
      email: "",
      password: "",
    });
  };

  return (
    <section className="mx-6 my-14 flex items-center justify-center mt-40 ">
      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.20)] rounded-2xl overflow-hidden  ">
        <div className="w-full md:w-1/2  flex flex-col items-center justify-center bg-linear-to-l from-yellow-300 to-orange-400 rounded-r-[150px]">
          <h1 className="text-2xl font-bold text-white mb-1">
            Hello, Welcome!
          </h1>
          <p className="text-white mb-4">Don't have an account?</p>
          <button className="border-2 border-white text-white font-bold py-2 px-4 rounded-2xl w-[130px] hover:bg-orange-300 cursor-pointer transition-colors duration-300">
            Register
          </button>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h1 className=" text-3xl font-bold text-black mb-6 text-center">
            Login
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder=" Your Email"
              value={login.email}
              className="border-none bg-gray-100 h-10 px-4 rounded-xl focus:outline-none "
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter Your Password"
              value={login.password}
              className="border-none bg-gray-100 h-10 px-4 rounded-xl focus:outline-none "
            />
            <p className="text-blue-500 hover:underline cursor-pointer text-center">
              Forgot Password?
            </p>
            <button
              type="submit"
              className="bg-linear-to-r from-yellow-300 to-orange-400 text-white font-bold py-2 px-4 rounded-2xl hover:from-yellow-400 hover:to-orange-500 transition-colors duration-300 cursor-pointer"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
