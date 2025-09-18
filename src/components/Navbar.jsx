import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" >Recepten</NavLink>
      <NavLink to="/categories">Categorieën</NavLink>
      <NavLink to="/favorieten">Favorieten</NavLink>
    </nav>
  );
}
