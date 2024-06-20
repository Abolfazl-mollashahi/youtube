import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useSignup from "../hooks/useSignup.js";
import useLogin from "../hooks/useLogin.js";

function Login({ setflaglogin }) {
  const [flagsignin, setflagesignin] = useState(true);
  const { loading: fsignup, signup } = useSignup();
  const { loading: flogin, login } = useLogin();
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const valueinput = (e) => {
    const { value, name } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const formlogin = async (e) => {
    e.preventDefault();
    const logi = await login(user)
    if(logi) setflaglogin(false)
  };

  const formSignup = async (e) => {
    e.preventDefault();
    const sin = await signup(user);
    if (sin) setflaglogin(false);
  };

  return (
    <div
      dir="ltr"
      className=" fixed top-0 left-0  w-full  flex items-center justify-center min-h-screen backdrop-blur-md "
    >
      {flagsignin ? (
        // login
        <div className="w-[90%] relative  max-w-md p-8 space-y-6 !rounded-2xl bg ">
          <button
            onClick={() => setflaglogin(false)}
            className=" w-[40px] h-[40px] absolute -top-4 -right-4 mask mask-hexagon bg-red-600 text-white scale-100 hover:scale-110  "
          >
            X
          </button>
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
            Login
          </h2>
          <form onSubmit={formlogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={valueinput}
                value={user.email}
                required
                className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={valueinput}
                value={user.password}
                required
                className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember_me"
                  name="remember_me"
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember_me"
                  className="block ml-2 text-sm text-gray-400"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={flogin}
              >
                {flogin ? (
                  <span className="loading loading-dots loading-md"></span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
          <div className="text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={() => setflagesignin(false)}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </button>
          </div>
        </div>
      ) : (
        // sign up
        <div className="w-[90%] relative  max-w-md p-8 space-y-6 !rounded-2xl bg ">
          <button
            onClick={() => setflaglogin(false)}
            className=" w-[40px] h-[40px] absolute  -top-4  -right-4 mask mask-hexagon  bg-red-600 text-white scale-100 hover:scale-110"
          >
            X
          </button>

          <h2 className="text-2xl font-bold text-center text-gray-800 dark:!text-white">
            Sign Up
          </h2>
          {/* {user.fullname} */}
          <form onSubmit={formSignup} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="fullname"
                onChange={valueinput}
                value={user.fullname}
                required
                className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={valueinput}
                value={user.email}
                required
                className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={valueinput}
                value={user.password}
                required
                className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="confirm_password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm_password"
                name="confirmPassword"
                onChange={valueinput}
                value={user.confirmPassword}
                required
                className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={fsignup}
              >
                {fsignup ? (
                  <span className="loading loading-dots loading-md"></span>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </form>
          <div className="text-sm text-center text-gray-400">
            Already have an account?{" "}
            <button
              onClick={() => setflagesignin(true)}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
