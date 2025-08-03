import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/action";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user } = useSelector((state) => state.auth);
  const [form, setForm] = useState({ email: "", password: "", role: "customer" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form, navigate));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="login-container" style={{ maxWidth: 400, margin: "auto", padding: "1rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: 12, padding: 10, fontSize: 16 }}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: 20, padding: 10, fontSize: 16 }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: 12,
            background: "#27548A",
            color: "#fff",
            fontSize: 16,
            border: "none",
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
