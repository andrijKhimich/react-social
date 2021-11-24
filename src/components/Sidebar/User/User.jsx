import UserPhoto from "./UserPhoto/UserPhoto";
import UserName from "./UserName/UserName";
import "./User";


const User = () => {
  return (
    <div className="user">
      <UserPhoto />
      <UserName />
    </div>
  )

}

export default User;