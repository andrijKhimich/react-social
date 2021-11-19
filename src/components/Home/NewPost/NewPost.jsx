import "./newPost.scss"

const NewPost = () => {
  return (
    <form className="formPost">
      <textarea className="border" name="newPostText" rows="5"></textarea>
      <button>Add post</button>
    </form>
  )
}

export default NewPost;