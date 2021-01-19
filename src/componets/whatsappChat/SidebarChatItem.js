import { Avatar } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

//css
import './SidebarChatItem.css';

function SidebarChatItem({addNewChat}) {

    const createChat = () => {
        const roomName = prompt("please enter room name")
        console.log(roomName)
    }
    return !addNewChat ? (
        <Link to="">
            <div className="sidebarChat bg-light">
                <Avatar />
                <div className="sidebarChat__info">
                    <h2>Gideon</h2>
                    <p>yh</p>
                </div>
            </div>
        </Link>
    )
    : (
        <div className="sidebarChat" onClick={createChat}>
            <h2>Add New Chat</h2>
        </div>
    )
}

export default SidebarChatItem
