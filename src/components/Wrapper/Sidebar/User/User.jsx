import userPhoto from "./images/user-photo.jpg"
import "./user.css"

const User = () => {
  return (
    <div className="user">
      <div className="user__img">
        <img src={userPhoto} alt="User name" />
      </div>
    </div>
  )

}

export default User;