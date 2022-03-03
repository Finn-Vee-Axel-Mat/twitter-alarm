import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import IndexNavbar from "../components/IndexNavbar.js";
import FooterSmall from "../components/FooterSmall.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/following");
    }
  }, []);

  const login = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("token", data.token);
      navigate("/following");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <>
      <section className="relative w-full h-full py-40 min-h-screen bg-blue-500">
        <IndexNavbar fixed />
        <div className="absolute top-0 w-full h-full white bg-no-repeat bg-full"></div>
        <div className="container mx-auto h-full px-8">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 bg-white rounded-xl">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-blueGray-800 text-2xl font-bold">
                      Sign in
                    </h6>
                  </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <form onSubmit={login}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-800 text-sm font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-full text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-800 text-sm font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        required
                        placeholder="Password"
                        autoComplete="true"
                        onChange={(e) => setPassword(e.target.value)}
                        className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-full text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          id="customCheckLogin"
                          type="checkbox"
                          className="form-checkbox border rounded-lg text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        />
                        <span className="ml-2 text-sm font-semibold text-blueGray-600">
                          Remember me
                        </span>
                      </label>
                    </div>

                    {error && (
                      <span className="text-red-500 font-semibold">
                        {error}
                      </span>
                    )}

                    <div className="text-center mt-2">
                      <button
                        type="submit"
                        className="bg-blue-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>

                  <div className="flex flex-wrap mt-6 relative">
                    <div className="w-1/2">
                      <a
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        className="text-blueGray-800"
                      >
                        <small>Forgot password?</small>
                      </a>
                    </div>
                    <div className="w-1/2 text-right">
                      <Link to="/register" className="text-blueGray-800">
                        <small>Create new account</small>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterSmall absolute />
      </section>
    </>
  );
};

export default Login;
