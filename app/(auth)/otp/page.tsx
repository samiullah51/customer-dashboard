"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

function OtpPage() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otp.join("");
    console.log("Submitted OTP:", otpCode);
    router.push("/dashboard");
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="w-full h-full lg:w-[33%] bg-white flex flex-col justify-center px-6 sm:px-10 md:px-20 relative">
        <div className="mb-8">
          <h1
            className={`${merriweather.className} text-2xl font-bold text-gray-800`}
          >
            Verify OTP
          </h1>
          <p className="text-gray-600 mt-2">
            We sent a verification code to your number +966 508143372
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex justify-evenly flex-1 gap-x-10 ">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleBackspace(e, index)}
                ref={(el: any) => (inputRefs.current[index] = el)}
                className="w-full h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                autoFocus={index === 0}
              />
            ))}
          </div>
          <label
            htmlFor="remember"
            className=" text-[16px] mr-1 text-[#052145] cursor-pointer flex justify-end"
          >
            55s
          </label>
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-medium border-none outline-none p-4 rounded-lg"
          >
            Verify
          </button>

          <div className="flex items-center justify-center">
            <label
              htmlFor="remember"
              className="ml-3 text-[16px] mr-1 text-[#052145] cursor-pointer"
            >
              Didn't received?
            </label>

            <a
              href="#"
              className="text-[16px] my-1 font-medium text-[#FA1F00] hover:underline"
            >
              Resend
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OtpPage;
