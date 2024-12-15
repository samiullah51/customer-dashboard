"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Merriweather } from "next/font/google";
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/otp");
  };

  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="hidden md:block w-1/2 bg-gray-200 relative">
        <img
          src="/assets/images/login.png"
          alt="Login"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="w-full h-full md:w-[60%] lg:w-[33%] bg-white flex flex-col justify-center px-6 sm:px-10 md:px-20 relative">
        <div className="mb-8">
          <h1
            className={`${merriweather.className} text-2xl font-bold text-gray-800`}
          >
            Welcome Back!
          </h1>
          <p className="text-gray-600 mt-2">
            Enter your email and password to login
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <div className="mt-1 flex items-center w-full md:w-[100%] lg:w-full px-4 py-2 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
              <img src="/assets/icons/Call.png" className="w-6 h-6" alt="" />
              <input
                type="text"
                placeholder="Phone number"
                className="w-full border-none outline-none p-2"
                autoFocus
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-medium border-none outline-none p-4 rounded-lg"
          >
            Login
          </button>

          <div className="flex items-center justify-center">
            <label
              htmlFor="remember"
              className="ml-3 text-[16px] mr-1 text-[#052145] cursor-pointer"
            >
              Don't have an account?
            </label>

            <a
              href="#"
              className="text-[16px] font-medium text-[#FA1F00] hover:underline"
            >
              Register here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
