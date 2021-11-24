import "./PostAuthor.scss";

const PostAuthor = (props) => {

  return (
    <div className="post__author">
      <img src={props.avatar} alt={props.name} />
      <p>{props.name}</p>
    </div>
  )
}

export default PostAuthor;
