import { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Register:", form);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Login:", {
      email: form.email,
      password: form.password,
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="relative w-full max-w-4xl min-h-[500px] bg-white rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.20)] overflow-hidden">
        <div
          className={`absolute top-0 left-0 w-full md:w-1/2 h-full p-8 flex items-center justify-center
  md:transition-all md:duration-700
  ${
    isLogin
      ? "hidden md:flex md:translate-x-full md:opacity-0"
      : "flex md:translate-x-0 md:opacity-100"
  }`}
        >
          <form
            onSubmit={handleRegister}
            className="w-full max-w-sm flex flex-col gap-4"
          >
            <h1 className="text-3xl font-bold text-gray-700 mb-4 text-center">
              Sign Up for Foodie
            </h1>

            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
              className="bg-gray-100 h-10 px-4 rounded-xl focus:outline-none"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
              className="bg-gray-100 h-10 px-4 rounded-xl focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="bg-gray-100 h-10 px-4 rounded-xl focus:outline-none"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="bg-gray-100 h-10 px-4 rounded-xl focus:outline-none"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="bg-gray-100 h-10 px-4 rounded-xl focus:outline-none"
            />

            <button
              type="submit"
              className="bg-linear-to-r from-yellow-300 to-orange-400 text-white font-bold py-2 rounded-2xl hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 cursor-pointer"
            >
              Register
            </button>
            <p className="text-center text-gray-600 md:hidden">
              Already Have an Account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Login
              </button>
            </p>
          </form>
        </div>

        <div
          className={`absolute top-0 left-0 w-full md:w-1/2 h-full p-8 flex items-center justify-center
  md:transition-all md:duration-700
  ${
    isLogin
      ? "flex md:translate-x-full md:opacity-100"
      : "hidden md:flex md:translate-x-0 md:opacity-0 md:pointer-events-none"
  }`}
        >
          <form
            onSubmit={handleLogin}
            className="w-full max-w-sm flex flex-col gap-4"
          >
            <h1 className="text-3xl font-bold text-gray-700 mb-4 text-center">
              Login
            </h1>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="bg-gray-100 h-10 px-4 rounded-xl focus:outline-none"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="bg-gray-100 h-10 px-4 rounded-xl focus:outline-none"
            />
            <p className="text-blue-500 hover:underline cursor-pointer text-center">
              Forgot Password?
            </p>

            <button
              type="submit"
              className="bg-linear-to-r from-yellow-300 to-orange-400 text-white font-bold py-2 rounded-2xl hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 cursor-pointer"
            >
              Login
            </button>
          </form>
        </div>

        <div
          className={`hidden md:flex absolute top-0 left-1/2 w-1/2 h-full
  bg-linear-to-r from-yellow-300 to-orange-400
  flex-col items-center justify-center text-center text-white
  rounded-l-[150px] md:transition-all md:duration-700
  ${
    isLogin
      ? "-translate-x-full rounded-r-[150px] rounded-l-none"
      : "translate-x-0"
  }`}
        >
          {!isLogin ? (
            <>
              <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>

              <p className="mb-4">Already Have an Account?</p>

              <button
                onClick={() => setIsLogin(true)}
                className="border-2 border-white text-white font-bold py-2 px-6 rounded-2xl hover:bg-white hover:text-orange-400 transition-all duration-300"
              >
                Login
              </button>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-2">Hello, Welcome!</h1>

              <p className="mb-4">Don't Have an Account?</p>

              <button
                onClick={() => setIsLogin(false)}
                className="border-2 border-white text-white font-bold py-2 px-6 rounded-2xl hover:bg-white hover:text-orange-400 transition-all duration-300"
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Auth;
