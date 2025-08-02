import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/action";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {user}=useSelector((state)=>state.auth)
  const [form, setForm] = useState({ email: "", password: "", role: "customer"});
  const [activeRole, setActiveRole] = useState("customer");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleSwitch = (role) => {
    setActiveRole(role);
    setForm({ ...form, role });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form, navigate));
  };
  
  useEffect(() => {
    if (user) {
      
      if (user.role === "customer") {
        navigate("/");
      } else if (user.role === "owner") {
        navigate("/owner/dashboard");
      }
    }
  }, [user, navigate]);

  return (
    <div className="login-container" style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Login</h2>
      <div style={{ display: "flex", marginBottom: 16 }}>
        <button
          type="button"
          onClick={() => handleRoleSwitch("customer")}
          style={{
            flex: 1,
            padding: 10,
            background: activeRole === "customer" ? "#27548A" : "#ccc",
            color: activeRole === "customer" ? "#fff" : "#000",
            border: "none"
          }}
        >
          Customer
        </button>
        <button
          type="button"
          onClick={() => handleRoleSwitch("owner")}
          style={{
            flex: 1,
            padding: 10,
            background: activeRole === "owner" ? "#27548A" : "#ccc",
            color: activeRole === "owner" ? "#fff" : "#000",
            border: "none"
          }}
        >
          Restaurant Owner
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: 8, padding: 8 }}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: 16, padding: 8 }}
        />
        <button type="submit" style={{ width: "100%", padding: 10, background: "#27548A", color: "#fff" }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
