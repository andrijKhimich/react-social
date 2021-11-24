// importing styles
import "./Messages.scss";

// importing components
import MessageText from "./MessageText/MessageText";
import MessageUser from "./MessageUser/MessageUser";
import NewMessage from "./NewMessage/NewMessage";

const Messages = (props) => {

  // destruction variables
  const userText = props.state.messagesUsersTexts;
  const userData = props.state.messagesUsersData;
  // console.log(userData);

  let messagesUserText = userText.map(messagesText => {
    return (
      <MessageText key={messagesText.id} text={messagesText.text} />
    )
  });

  let messagesUser = userData.map(messagesUserData => {
    return (
      <MessageUser id={messagesUserData.id} key={messagesUserData.id} name={messagesUserData.name} />
    )
  });

  return (
    <div className="messages">
      <div className="messages__users">
        {messagesUser}
      </div>
      <div className="messages__window">
        <div className="messages__text">
          {messagesUserText}
        </div>
        <NewMessage />
      </div>

    </div>
  )
}

export default Messages;
