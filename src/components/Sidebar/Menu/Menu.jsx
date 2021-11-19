import menu from "./menu.module.scss";

const Menu = () => {
  return (
    <nav className={menu.nav}>
      <ul className={menu.list}>
        <li className={`${menu.item} ${menu.active}`}>
          <a href="./">Home</a>
        </li>
        <li className={menu.item}>
          <a href="./">Profile</a>
        </li>
        <li className={menu.item}>
          <a href="./">Messages</a>
        </li>
        <li className={menu.item}>
          <a href="./">News</a>
        </li>
        <li className={menu.item}>
          <a href="./">Settings</a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;