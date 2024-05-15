import React, { useState } from "react";
import "./Signup.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const history = useNavigate();
  // Error handling function
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowConfirmPassword(true);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      console.log("Signup successful!");

      history("/");
    } else {
      // Display error message for unmatching passwords
      console.log("Passwords don't match");
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSignup}>
        <h1>Signup</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FaEnvelope className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <FaLock className="icon" />
        </div>
        {showConfirmPassword && (
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>
        )}
        <button type="submit">Signup</button>
        <div className="register-link">
          <p>
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
