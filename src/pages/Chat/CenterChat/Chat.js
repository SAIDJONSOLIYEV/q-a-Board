import React, { useContext, useEffect, useRef, useState } from 'react'
import './scss/Chat.scss'
import sendIcon from './images/send.png'
import io from "socket.io-client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBackspace } from '@fortawesome/free-solid-svg-icons';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [userTyping, setUserTyping] = useState("");
  const [selectFromTheads, setSelectFromTheads] = useState(localStorage.getItem("selectFromTheads"))
  const messageListRef = useRef(null);
  useEffect(() => {
    messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
  }, [messages]);
  useEffect(() => {
    // socket.on("message", (message) => {
    //   setMessages(message ? JSON.parse(message) : [])
    // })
    // socket.on('messageDeleted', (messageId) => {
    //   setMessages((prevMessages) =>
    //     prevMessages.filter((message) => message.id !== messageId)
    //   )
    // });
  }, []);


  function handleMessageSubmit(event) {
    event.preventDefault();
    if (message)
      // socket.emit("message", JSON.stringify({
      //   text: message,
      //   sender: 1
      // }));
    setMessage("");
  }
  function deleteMessage(id) {
    // socket.emit("deleteMessage", id)
  }
  return (
    <div className={selectFromTheads ? "d-flex chat-container" : 'd-none chat-container'}>
      <div className='user-continer'>
        <FontAwesomeIcon icon={faArrowLeft} size="2x" className='back-icon' onClick={() => localStorage.removeItem("selectFromTheads")} />
        <div className='user-image'>
          <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
        </div>
        <div className='user-infos'>
          <div className='names'>
            <span>Abdurakhmonov Sharif</span>
          </div>
          <div className='status'>
            {
              message ? <span>{userTyping}</span> : <span>Online</span>
            }
          </div>
        </div>
      </div>
      <div className='chat' >
        <div className='messages' ref={messageListRef}>
          {
            messages?.map(item => {
              return (
                <div key={item.id} className={item.sender_id === "1" ? "currentUser-message-container" : "user-message-container"}>
                  <div className='user-image'>
                    <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
                  </div>
                  <div className={'message'}>
                    <div className='text'>
                      {item.text}
                    </div>
                    <div className='time'>
                      {item.time}
                    </div>
                  </div>
                  {/* <div className='btn btn-danger' onClick={() => deleteMessage(item.id)}>del</div> */}
                </div>
              )
            })
          }
        </div>
        <div className='input-container'>
          <form className='form' onSubmit={handleMessageSubmit}>
            <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" className='form-control' placeholder='send message' />
            <button className='send-container' >
              <img src={sendIcon} alt="sendImage" />
            </button>
          </form>
        </div>
      </div>
    </div >
  )
}

export default Chat