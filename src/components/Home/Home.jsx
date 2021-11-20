import "./Home.scss"

import MyPosts from "./MyPosts/MyPosts";
import NewPost from "./NewPost/NewPost";

import userAvatar from "../../images/user-photo.jpg"

const Home = () => {
  return (
    <div className="home border">
      <NewPost />
      <MyPosts text="Hello world" author="Andrew" userPhoto={userAvatar} />
      <MyPosts text="How are you?" author="Andrew" userPhoto={userAvatar} />
    </div>
  )
}

export default Home;