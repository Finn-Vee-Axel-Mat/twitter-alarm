import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { resetPasswordMail } from "../scripts/mailing.js";

import IndexNavbar from "../components/IndexNavbar.js";
import FooterSmall from "../components/FooterSmall.js";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/following");
    }
  }, []);

  const forgotPassword = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/forgot-password",
        { email },
        config
      );

      setSuccess(data.data);

      const resetUrl = `http://localhost:3000/reset-password/${data.resetToken}`;

      resetPasswordMail(email, resetUrl);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
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
                    <h6 className="text-slate-800 text-2xl font-bold">
                      Forgot password
                    </h6>
                  </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-6 pt-0">
                  <form onSubmit={forgotPassword}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-slate-800 text-sm font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Enter your email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="border px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded-full text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>

                    {error && (
                      <span className="text-red-500 font-semibold">
                        {error}
                      </span>
                    )}

                    {success && (
                      <span className="text-emerald-500 font-semibold">
                        {success}
                      </span>
                    )}

                    <div className="text-center mt-3">
                      <button
                        type="submit"
                        className="bg-blue-500 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      >
                        Send
                      </button>
                    </div>
                  </form>

                  <div className="flex flex-wrap mt-6 relative">
                    <div className="w-1/2">
                      <Link to="/login" className="text-slate-800">
                        <small>Have an account?</small>
                      </Link>
                    </div>
                    <div className="w-1/2 text-right">
                      <Link to="/register" className="text-slate-800">
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

export default ForgotPassword;
