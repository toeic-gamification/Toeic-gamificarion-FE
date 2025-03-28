import React from "react";
import SocialLogin from "../components/SocialLogin";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="form-container sign-in">
      <form>
        <h1>Sign In</h1>
        <SocialLogin />
        <span>or use your email password</span>
        <InputField type="email" placeholder="Email" />
        <InputField type="password" placeholder="Password" />
        <a href="#">Forget Your Password?</a>
        <Button text="Sign In" className="btn-primary" />
      </form>
    </div>
  );
};

export default Login;
