import "./NewPost.scss"
import React from 'react';

const NewPost = (props) => {
  // console.log(props.message)
  let newPostEl = React.createRef();

  const addPost = (e) => {
    e.preventDefault();
    let text = newPostEl.current.value;

    newPostEl.current.value = "";
    props.addNewPost(text);
  }


  return (
    <form className="formPost">
      <textarea ref={newPostEl} className="border" name="newPostText" rows="5"></textarea>
      <button onClick={addPost}>Add post</button>
    </form>
  )
}

export default NewPost;