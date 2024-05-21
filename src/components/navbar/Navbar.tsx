import { NavLink } from "react-router-dom";
import "./navbar.scss";

export const Navbar = () => {
  const content = (
    <div className="navbar">
      <NavLink to="/" className="link">
        Home
      </NavLink>
    </div>
  );
  return content;
};
