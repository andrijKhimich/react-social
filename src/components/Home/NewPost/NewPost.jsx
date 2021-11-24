import "./NewPost.scss"
import React from 'react';

const NewPost = () => {

  let newPostEl = React.createRef();

  const addPost = (e) => {
    e.preventDefault();
    let text = newPostEl.current.value;
    console.log(text);
  }
  

  return (
    <form className="formPost">
      <textarea ref={newPostEl} className="border" name="newPostText" rows="5"></textarea>
      <button onClick={addPost}>Add post</button>
    </form>
  )
}

export default NewPost;