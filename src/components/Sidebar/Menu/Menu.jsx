import menu from "./menu.module.scss";

const Menu = () => {
  return (
    <nav className={menu.nav}>
      <ul className={menu.list}>
        <li className={`${menu.item} ${menu.active}`}>
          <a href="./home">Home</a>
        </li>
        <li className={menu.item}>
          <a href="./messages">Messages</a>
        </li>
        <li className={menu.item}>
          <a href="./news">News</a>
        </li>
        <li className={menu.item}>
          <a href="./settings">Settings</a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;