import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, { useState } from 'react'

//css
import "./WhatsappChat.css";

function WhatsappChat() {
    const [input, setInput] = useState("");

    const sendMessage = (e) => {
        e.preventDefault()
        console.log("send message")
    }

    return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Gideon</h3>
          <p>now</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
          <p className="chat__message">
              <span className="chat__name">Hello</span>
              <span className="chat__timestamp">now</span>
          </p>
          <p className="chat__message chat__receiver">
              <span className="chat__name">yh</span>
              <span className="chat__timestamp">now</span>
          </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            placeholder="Type your message"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
    )
}

export default WhatsappChat
