import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const logout = () => {
    if (confirm("Are you sure?")) {
      localStorage.removeItem("user");
      navigate("/login");
    }
  };
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        {user ? (
          <li>
            <button onClick={logout} className="btn btn-danger">
              Hello {user?.user?.email} - Logout
            </button>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </header>
  );
}
