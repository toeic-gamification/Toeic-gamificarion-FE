import React from "react";
import SocialLogin from "../components/SocialLogin";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/global.css";

const Register = () => {
  return (
    <div className="form-container sign-up">
      <form>
        <h1>Create Account</h1>
        <SocialLogin />
        <span>or use your email for registration</span>
        <InputField type="text" placeholder="Name" />
        <InputField type="email" placeholder="Email" />
        <InputField type="password" placeholder="Password" />
        <Button text="Sign Up" className="btn-primary" />
      </form>
    </div>
  );
};

export default Register;
