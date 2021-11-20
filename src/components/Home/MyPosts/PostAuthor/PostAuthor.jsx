import "./PostAuthor.scss";

const PostAuthor = (props) => {
  return (
    <div className="postAuthor">
      <img src={props.avatar} alt="User name" />
      <p>{props.author}</p>
    </div>
  )
}

export default PostAuthor;