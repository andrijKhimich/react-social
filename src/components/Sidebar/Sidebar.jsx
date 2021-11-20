import User from "./User/User";
import Menu from "./Menu/Menu";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <User />
      <Menu/>
    </aside>
  )
}

export default Sidebar;