import React from "react";

const NewMessage = () => {
  let newTextEl = React.createRef();

  const sendMessage = (e) => {
    e.preventDefault();
    const text = newTextEl.current.value;
    console.log(text);
  }

  return (
    <form action="" className="messages__form">
      <textarea ref={newTextEl} name="newMessage" rows="5"></textarea>
      <button onClick={sendMessage}>Send</button>
    </form>
  )
}

export default NewMessage;