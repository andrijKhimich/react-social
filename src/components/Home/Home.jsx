// importing component styles
import "./Home.scss";

// importing components
import MyPost from "./MyPost/MyPost";
// import PostText from "./MyPost/PostText/PostText";
import NewPost from "./NewPost/NewPost";

const Home = (props) => {
  const postData = props.state.posts;

  let userPost = postData.map(postUserData => {
    return (
      <MyPost id={postUserData.id} name={postUserData.name} text={postUserData.text} />
    )
  });
  // console.log(props);

  return (
    <div className="home border">
      <NewPost message={props.post} addNewPost={props.addNewPost} updateNewPost={props.updateNewPost}/>
      {userPost}
    </div>
  )
}

export default Home;