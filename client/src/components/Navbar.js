import { useDispatch, useSelector } from "react-redux";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../redux/action";

const Navbar = () => {
    const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.info("Logged out");
  };

  return (
    <nav style={{ padding: "1rem", background: "#eee", display: "flex", justifyContent: "space-between" }}>
      <div>
        <Link to="/">Home</Link> |{" "}
        <Link to="/cart">Cart</Link>
      </div>

      <div>
        {user ? (
          <>
            <span>👤 {user.name}</span>{" "}
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link> |{" "}
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
