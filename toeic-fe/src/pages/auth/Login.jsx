import React, { useState } from "react";
import SocialLogin from "../../components/student/SocialLogin";
import InputField from "../../components/student/InputField";
import Button from "../../components/student/Button";
import { loginUser } from "../../api/userApi";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Xử lý thay đổi input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gọi API đăng nhập
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await loginUser(formData);
      console.log("Login success:", response.data.login);
      alert("Đăng nhập thành công!");
      // Lưu token vào localStorage
      localStorage.setItem("token", response.data.login.token);
    } catch (err) {
      console.error("Login error:", err);
      setError("Sai email hoặc mật khẩu!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container sign-in">
      <form onSubmit={handleLogin}>
        <h1>Sign In</h1>
        <SocialLogin />
        <span>or use your email password</span>
        <InputField
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <a href="#">Forget Your Password?</a>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button
          text={loading ? "Signing in..." : "Sign In"}
          className="btn-primary"
          onClick={handleLogin}
        />
      </form>
    </div>
  );
};

export default Login;
