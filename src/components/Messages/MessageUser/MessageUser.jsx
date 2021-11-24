import { NavLink, useLocation } from "react-router-dom";
import UserPhoto from "../../../images/user-photo.jpg";

const MessageUser = (props) => {
  let pathPhoto = UserPhoto;
  let url = useLocation().pathname;
  let path = `${url}/${props.id}`;
  // console.log(props)
  return (
    <NavLink to={path} className="messages__user">
      <img src={pathPhoto} alt={props.name} />
      {props.name}
    </NavLink>
  )
}

export default MessageUser;