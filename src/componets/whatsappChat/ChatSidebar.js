import { Avatar, IconButton, SwipeableDrawer, TextField, useMediaQuery } from '@material-ui/core'
import { Chat, DonutLarge, Menu, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, { Fragment, useState } from 'react'
import SidebarChatItem from './SidebarChatItem';

//css
import "./ChatSidebar.css";

function ChatSidebar() {
    const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery("(max-width: 570px)");
    return (
    <Fragment>
      {!matches ? (
        <div className="sidebarContainer">
          <div className="sidebar__header">
            <Avatar />
          </div>
          <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <TextField label="Search for contact" value={search} onChange={e => setSearch(e.target.value)}/>
            </div>
          </div>
          <div className="sidebar__chats">
            <SidebarChatItem addNewChat />
            <SidebarChatItem />
            <SidebarChatItem />
            <SidebarChatItem />
          </div>
        </div>
      ) : (
        <Fragment>
            <div className="sidebar__triggerContainer">
                <IconButton onClick={() => setOpen(true)}>
                    <Menu />
                </IconButton>
            </div>
          <SwipeableDrawer
            anchor={"left"}
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
          >
              <div className="sidebarContainer">
          <div className="sidebar__header">
            <Avatar />
          </div>
          <div className="sidebar__search">
            <div className="sidebar__searchContainer">
              <TextField label="search for chat" value={search} onChange={e => setSearch(e.target.value)}/>
            </div>
          </div>
          <div className="sidebar__chats">
            <SidebarChatItem addNewChat />
          </div>
        </div>
          </SwipeableDrawer>
        </Fragment>
      )}
    </Fragment>)
}

export default ChatSidebar
