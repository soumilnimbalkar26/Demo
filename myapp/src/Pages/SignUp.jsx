import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [UserSignUp, setUserSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [Records, setRecords] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserSignUp({ ...UserSignUp, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...UserSignUp, id: new Date().getTime().toString() };
    console.log(Records);
    setRecords([...Records, newRecord]);
    console.log(Records);

    setUserSignUp({ username: "", email: "", password: "" });
  };

  return (
    <>
      <section className=" bg-gray-700 h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto">
          <div className="w-full bg-gray-900 rounded-lg shadow max-w-md mt-32">
            <div className="p-6 space-y-6">
              <h1 className="text-white text-xl font-bold flex justify-center">
                SignUp
              </h1>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="text-white font-bold">Userame</label>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    required
                    className="bg-gray-700 text-white rounded-lg block w-full p-2.5 mt-3"
                    placeholder="username"
                    value={UserSignUp.username}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className=" text-white font-bold">Your email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-700 text-white rounded-lg block w-full p-2.5 mt-3"
                    placeholder="name@gmail.com"
                    required
                    value={UserSignUp.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className=" text-white font-bold"> Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-700 text-white rounded-lg block w-full p-2.5 mt-3"
                    required
                    value={UserSignUp.password}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-black bg-white hover:bg-gray-200 duration-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  SignUp
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?
                  <Link
                    to="../Pages/SignIn.jsx"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 pl-1"
                  >
                    SignIn
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
