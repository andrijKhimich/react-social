import "./MyPost.scss"

import PostAuthor from "./PostAuthor/PostAuthor";
import PostText from "./PostText/PostText";

const MyPost = (props) => {

  return (
    <div className="post">
      <PostAuthor id={props.id} name={props.name} avatar={props.imgSrc} />
      <PostText message={props.text} />
    </div>
  )
}

export default MyPost;