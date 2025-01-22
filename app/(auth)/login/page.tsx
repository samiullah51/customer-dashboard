"use client";
import { useState, useEffect, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Merriweather } from "next/font/google";
import { useRouter } from "next/navigation";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const router = useRouter();

  useEffect(() => {
    if (showOtpModal && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [showOtpModal, timer]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length < 6) {
      alert("Please enter a valid phone number.");
      return;
    }
    setShowOtpModal(true);
    setTimer(60);
  };

  const handleOtpChange = (value: string, index: number) => {
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

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otp.join("");
    console.log("Submitted OTP:", otpCode);
    router.push("/dashboard");
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
          <p className="text-gray-600 mt-2">Enter your phone number to login</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <PhoneInput
              country={"us"}
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
              inputClass="!w-full !border-[#FFE8E5] !rounded-lg !shadow-sm"
              containerClass="phone-input-container"
              buttonClass="phone-input-button"
              inputStyle={{
                width: "100%",
                borderRadius: "8px",
                padding: "30px 50px",
                border: "1px solid #FFE8E5",
                fontSize: "18px",
              }}
              dropdownStyle={{
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
            />
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

      {showOtpModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white mx-2 w-full max-w-lg rounded-lg shadow-lg p-6 relative">
            <h1
              className={`${merriweather.className} text-2xl font-bold text-gray-800 mb-4`}
            >
              Verify OTP
            </h1>
            <p className="text-gray-600 mb-4">
              We sent a verification code to your number{" "}
              <span className="text-gray-800 font-medium">{phoneNumber}</span>
            </p>
            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <div className="flex justify-evenly gap-x-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    onKeyDown={(e) => handleBackspace(e, index)}
                    ref={(el: any) => (inputRefs.current[index] = el)}
                    className="w-full h-12  text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                    autoFocus={index === 0}
                  />
                ))}
              </div>
              <label className="text-[16px] flex justify-end text-[#052145] cursor-pointer">
                {timer > 0 ? `${timer}s` : "Resend available"}
              </label>
              <button
                type="submit"
                className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-medium border-none outline-none p-4 rounded-lg"
              >
                Verify
              </button>
              <div className="flex items-center justify-center">
                <label
                  htmlFor="resend"
                  className="ml-3 text-[16px] mr-1 text-[#052145] cursor-pointer"
                >
                  Didn't receive?
                </label>
                <a
                  href="#"
                  className={`text-[16px] my-1 font-medium ${
                    timer > 0
                      ? "text-gray-400"
                      : "text-[#FA1F00] hover:underline"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (timer === 0) {
                      setTimer(60);
                    }
                  }}
                >
                  Resend
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
