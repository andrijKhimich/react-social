import "./menu.scss";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/messages">Messages</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/news">News</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/settings" >Settings</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;