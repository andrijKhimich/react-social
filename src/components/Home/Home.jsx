// importing component styles
import "./Home.scss";

// importing components
import MyPost from "./MyPost/MyPost";
import NewPost from "./NewPost/NewPost";

const Home = (props) => {

  const postData = props.state.posts;
  let userPost = postData.map(postUserData => {
    return (
      <MyPost id={postUserData.id} name={postUserData.name} text={postUserData.text} />
    )
  });

  return (
    <div className="home border">
      <NewPost post={props.post} />
      {userPost}
    </div>
  )
}

export default Home;