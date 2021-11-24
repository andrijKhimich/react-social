// importing component styles
import "./Home.scss";

// importing components
import MyPosts from "./MyPosts/MyPosts";
import NewPost from "./NewPost/NewPost";

const Home = (props) => {

  return (
    <div className="home border">
      <NewPost />
      <MyPosts state={props.state} />
    </div>
  )
}

export default Home;