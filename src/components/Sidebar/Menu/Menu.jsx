import menu from "./menu.module.scss";
import { NavLink } from "react-router-dom";

const Menu = () => {
  console.log(menu);
  return (
    <nav className={menu.nav}>
      <ul className={menu.list}>
        <li className={menu.item}>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li className={menu.item}>
          <NavLink to="/messages">Messages</NavLink>
        </li>
        <li className={menu.item}>
          <NavLink to="/news">News</NavLink>
        </li>
        <li className={menu.item}>
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;