import React,{useState} from 'react'
import "./Sidebar.css"
import {Link} from 'react-router-dom'
import Notifications from '../notifications/Notifications'
import MenuIcon from '@material-ui/icons/Menu'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import ListIcon from '@material-ui/icons/List'
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import HomeIcom from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import DeveloperIcon from '@material-ui/icons/DeveloperMode'
import NotificationsIcon from '@material-ui/icons/Notifications'
import EventNoteIcon from '@material-ui/icons/EventNote';
import NoteIcon from '@material-ui/icons/Note';
import TimeIcon from '@material-ui/icons/Timer'
import SettingsIcon from '@material-ui/icons/Settings'
import CommentIcon from '@material-ui/icons/Comment'
import ContactsIcon from '@material-ui/icons/Contacts';
import AddIcon from '@material-ui/icons/Add';
import ComputerIcon from '@material-ui/icons/Computer';
import PeopleIcon from '@material-ui/icons/People';
import PopperContainer from '../utils/popper'
import QuickAdd from '../quickAdd/QuickAdd'
import ChatIcon from '@material-ui/icons/Chat'
import { Avatar, TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { logout } from '../../slices/authSlice'

function Sidebar(props) {
const dispatch = useDispatch();
const  [click,setClick] = useState(false);
const handleClick = ()=>{ setClick(prev => !prev);}
const [search, setSearch] = useState('');

const handleChange = e => {setSearch(e.target.value)}
const handleLogout = () => {dispatch(logout())}

    return (
        <>
        <input type="checkbox" id="sidebar-toggle"/>
          <div className="sidebar" id={click ? "reduce" : ""} >
              <div className="sidebar-header">
                  <h3 className="brand">
                      <span>CodingGreat</span> 
                    </h3>
                  <label htmlFor="sidebar-toggle" className="menu" onClick={handleClick}>
                    <ListIcon className={click ? "initial": "initial"} id="list-icon"/>
                    {/* <MenuOpenIcon className={click ? "none": "initial"} id="open"  />  */}
                  </label>
              </div>
                 <div className="sidebar-menu">
                     <ul>
                         <li>
                             <Link to="/">
                                 <span>
                                     <HomeIcom />
                                 </span>
                                 <span className="list">Home</span>
                              </Link>
                        </li>
                         <li>
                             <Link to="/events">
                                 <span>
                                        <EventNoteIcon />
                                 </span>
                                 <span  className="list">Events</span>
                              </Link>
                        </li>
                         <li>
                             <Link to="/notes">
                                 <span>
                                     <NoteIcon />
                                 </span>
                                 <span  className="list">Notes</span>
                              </Link>
                        </li>
                         <li>
                             <Link to="/leads">
                                 <span className="icon">
                                     <ContactsIcon />
                                 </span>
                                 <span  className="list">Leads</span>
                              </Link>
                        </li>
                         <li>
                             <Link to="/tasks">
                                 <span>
                                     <ConfirmationNumberIcon />
                                 </span>
                                 <span  className="list">Tasks</span>
                              </Link>
                        </li>
                         <li>
                             <Link to="/contacts">
                                 <span>
                                     <ContactPhoneIcon />
                                 </span>
                                 <span  className="list">Contacts</span>
                              </Link>
                        </li>
                         <li>
                             <Link to="/projects">
                                 <span>
                                     <ComputerIcon />
                                 </span>
                                 <span  className="list">Projects</span>
                              </Link>
                        </li>
                         <li>
                             <Link to="/clients">
                                 <span>
                                     <PeopleIcon />
                                 </span>
                                 <span  className="list">Clients</span>
                              </Link>
                        </li>
                        <li>
                            <Link to="/exchat">
                                <span>
                                    <ChatIcon />
                                </span>
                                <span>Chat With Clients</span>
                            </Link>
                            </li>
                     </ul>
                 </div>
            </div> 

            <div className="search-content" >
                <header className="main-header">
                    <div>
                            <PopperContainer trig={<NotificationsIcon />}>
                                <Notifications 
                                notifications={[
                                    {title: 'hello user', body:'welcome to this nice and updatable app.'},
                                    {title: 'hello user', body:'welcome to this nice and updatable app.'},
                                    {title: 'hello user', body:'welcome to this nice and updatable app.'},
                                    {title: 'hello user', body:'welcome to this nice and updatable app.'},
                                    {title: 'hello user', body:'welcome to this nice and updatable app.'},
                                    {title: 'hello user', body:'welcome to this nice and updatable app.'},
                                    {title: 'hello user', body:'welcome to this nice and updatable app.'},
                                    {title: 'hello user', body:'welcome to this nice and updatable app.'},
                                    {title: 'hello user', body:'welcome to this nice and updatable app.'},
                                    {title: 'hello user', body:'welcome to this nice and updatable app.'}
                                ]}
                                />
                            </PopperContainer>
                    </div>
                    <div className="search-wrapper">
                        <TextField label="search" value={search} onChange={handleChange}/>
                    </div>
                    <div className="social-icons">
                        <span>
                            <PopperContainer trig={<AddIcon />}>
                                <QuickAdd 
                                actions={[
                                    {name: 'Event', Icon:EventNoteIcon, url: "/events"},
                                    {name: 'Note', Icon:NoteIcon, url: "/notes"},
                                    {name: 'Lead', Icon:ContactsIcon, url: "/leads"},
                                    {name: 'Task', Icon:ConfirmationNumberIcon, url: "/tasks"},
                                    {name: 'Contacts', Icon:ContactPhoneIcon, url: "/contacts"},
                                    {name: 'projects', Icon:ComputerIcon, url: "/projects"},
                                    {name: 'clients', Icon:PeopleIcon, url: "/clients"}
                                ]}
                                />
                            </PopperContainer>
                        </span>
                        
                         <span className="notify">
                            
                            <Link to="/chat" style={{color: "black"}}>
                           <span className="not">3</span> <CommentIcon /> 
                            </Link>
                        </span>
                        <div className="image">
                            <PopperContainer trig={<Avatar />}>
                                <a href="#" className="btn-lg">Change Profile Pic</a>
                                <a href="#" className="btn-lg">Remove Profile Pic</a>
                                <a href="#" className="btn-lg" onClick={handleLogout}>Logout</a>
                            </PopperContainer>
                        </div>
                    </div>
                </header>

            </div>
        
        </>
    )
}

export default Sidebar
