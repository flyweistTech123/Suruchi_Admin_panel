/** @format */
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLock } from "react-icons/fa";

const ForgetPassword = () => {
  return (
    <>
      <section className="LoginSection">
        <form>
          <h2 className="mb-3">Reset Password</h2>

          <div className="input_container">
            <input type="email" placeholder="admin@gmail.com" required />
            <AiOutlineMail className="text-xl " />
          </div>

          <div className="otp-container">
            <div className="input_container">
              <input
                type="tel"
                pattern="[0-9]{4}"
                placeholder="2312"
                required
              />
            </div>
            <button>Send OTP</button>
          </div>

          <div className="input_container">
            <input type="password" placeholder="New Password" required />
            <FaLock className="text-xl " />
          </div>
          <div className="input_container">
            <input type="password" placeholder="Confirm Password" required />
            <FaLock className="text-xl " />
          </div>

          <button type="button" className="EcommerceAdminLogin">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};
export default ForgetPassword;
