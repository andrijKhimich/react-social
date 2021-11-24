import "./PostAuthor.scss";

// import {useLocation } from "react-router-dom";


const PostAuthor = (props) => {

  console.log(props);

  return (
    <div className="postAuthor">
      <img src={props.avatar} alt={props.name} />
      <p>{props.name}</p>
    </div>
  )
}

export default PostAuthor;
