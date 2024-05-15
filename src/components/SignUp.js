import React from "react";
import "./Signup.css";
import { FaUser, FaLock } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Signup</h1>
        <div className="input-box">
          <input type="text" placeholder="Enter Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Enter Password" required />
          <FaLock className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Confirm Password" required />
          <FaLock className="icon" />
        </div>
        <button type="submit">Signup</button>
        <div className="register-link">
          <p>
            Already have an account? <a href="#">Login</a>
          </p>
          {/* Redirect an existing user to login page */}
        </div>
      </form>
    </div>
  );
};

export default SignUp;
