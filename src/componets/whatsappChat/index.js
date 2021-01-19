import React from 'react'
import WhatsappChat from './WhatsappChat'
import ChatSidebar from './ChatSidebar'

//css
import './index.css'

function index() {
    return (
        <div className="main-content chatContainer">
            <ChatSidebar />
            <WhatsappChat />
        </div>
    )
}

export default index
