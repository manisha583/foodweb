import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log(form);

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <section className="mx-6 my-14 flex items-center justify-center mt-40 ">
      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.20)] rounded-2xl overflow-hidden ">
        <div className="w-full md:w-1/2 p-8">
          <h1 className=" text-3xl font-bold text-black mb-6 text-center">
            Sign Up for Foodie
          </h1>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
              className="border-none bg-gray-100 h-10 px-4 rounded-xl focus:outline-none "
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
              className="border-none bg-gray-100 h-10 px-4 rounded-xl focus:outline-none "
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="border-none bg-gray-100 h-10 px-4 rounded-xl focus:outline-none "
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="border-none bg-gray-100 h-10 px-4 rounded-xl focus:outline-none "
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="border-none bg-gray-100 h-10 px-4 rounded-xl focus:outline-none "
            />
            <button
              type="submit"
              className="bg-linear-to-r from-yellow-300 to-orange-400 text-white font-bold py-2 px-4 rounded-2xl hover:from-yellow-400 hover:to-orange-500 transition-colors duration-300 cursor-pointer"
            >
              Register
            </button>
          </form>
          <h1 className="text-center mt-4 text-gray-600 md:hidden ">
            Already Have an Account?
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </h1>
        </div>

        <div className=" hidden md:flex md:w-1/2 p-8  flex-col items-center justify-center bg-linear-to-r from-yellow-300 to-orange-400 rounded-l-[150px]">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back !</h1>
          <p className="text-white mb-4">Already Have an Account?</p>
          <button className="border-2 border-white text-white font-bold py-2 px-4 rounded-2xl w-[130px] hover:bg-orange-300 cursor-pointer transition-colors duration-300">
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
