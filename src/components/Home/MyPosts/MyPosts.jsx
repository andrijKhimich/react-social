import "./MyPosts.scss"
import PostAuthor from "./PostAuthor/PostAuthor";
import PostText from "./PostText/PostText";

const MyPosts = (props) => {

  const postData = props.state.postAuthor;
  const postMessage = props.state.postText;
  // const postUser = props.author;

  console.log(props);


  let postInfo = postData.map(postUserData => {
    return (
      <PostAuthor name={postUserData.name} avatar={postUserData.imgSrc} />
    )
  });

  let postText = postMessage.map(postUserMessage => {
    return (
      <PostText message={postUserMessage.text} />
    )
  });


  return (
    <div className="post">
      {/* <PostAuthor author={props.author} avatar={props.userPhoto}/> */}
      {postInfo}
      {postText}
    </div>
  )
}

export default MyPosts;