import "./MyPosts.scss"
import PostAuthor from "./PostAuthor/PostAuthor";
import PostText from "./PostText/PostText";

const MyPosts = (props) => {
  return (
    <div className="post">
      <PostAuthor author={props.author} avatar={props.userPhoto}/>
      <PostText message={props.text}/>
    </div>
  )
}

export default MyPosts;