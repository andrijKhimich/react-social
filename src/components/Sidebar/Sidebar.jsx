import User from "./User/User";
import "./sidebar.scss";
import Menu from "./Menu/Menu";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <User />
      <Menu/>
    </aside>
  )
}

export default Sidebar;