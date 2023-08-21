import React from "react";
import { useState } from "react";

const SignIn = () => {
  const [UserSignIn, setUserSignIn] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserSignIn({ ...UserSignIn, [name]: value });
    console.log(name, value);
  };

  return (
    <>
      <section className=" bg-gray-700 h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto">
          <div className="w-full bg-gray-900 rounded-lg shadow max-w-md mt-32">
            <div className="p-6 space-y-6">
              <h1 className="text-white text-xl font-bold flex justify-center">
                SignIn
              </h1>
              <form className="space-y-4">
                <div>
                  <label className="text-white font-bold">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-700 text-white rounded-lg w-full p-2.5 mt-3"
                    placeholder="name@gmail.com"
                    required=""
                    value={UserSignIn.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="text-white font-bold">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-700 text-white rounded-lg w-full p-2.5 mt-3"
                    required=""
                    value={UserSignIn.password}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-black bg-white hover:bg-gray-200 duration-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  SignIn
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
