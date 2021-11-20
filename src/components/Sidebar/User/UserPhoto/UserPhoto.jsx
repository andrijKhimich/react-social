import userAvatar from "../../../../images/user-photo.jpg";

import "./UserPhoto.scss";

const UserPhoto = () => {
  return (
    <div className="user__img">
      <img src={userAvatar} alt="User name"/>
    </div>
  )
}

export default UserPhoto;