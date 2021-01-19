import React,{useState} from 'react'
import user from '../images/user-3.png'
import user2 from '../images/user-2.png'
import user3 from '../images/user-1.png'
import CallIcon from '@material-ui/icons/Call';
import InfoIcon from '@material-ui/icons/Info';
import SendIcon from '@material-ui/icons/Send';
import { AttachFile } from '@material-ui/icons';

function Chat() {
    const [change,setChange] = useState(false);
    const handleChange = ()=>{
        // let size = window.innerWidth;
        // if(size == 600 + 'px'){
        //     setChange(prev=> !prev);
        // }else{
        //     return 
        // }
        setChange(prev=> !prev);
    }
    return (
        <>
           <div className="chat-container">
               <div className="chat-main">
                  <div className="chat-sidebar" id={change ? "disapear": ""}>
                     <div className="side-header">
                         <h3>Contacts</h3>
                     </div>
                     <div className="profile-content">
                     <div className="chat-profile" onClick={handleChange}>
                          <span className="alert">4</span>
                             <span className="profile-img">
                                    <img src={user} alt=""/>
                              </span> 
                              <div className="chat-name">
                                   <span>Majesty</span> 
                                  <span className="time">2:00 AM</span>
                                </div> 
                      </div>
                      <div className="chat-profile" onClick={handleChange}>
                      <span className="alert">3</span>
                             <span className="profile-img">
                                    <img src={user2} alt=""/>
                              </span> 
                              <div className="chat-name">
                                   <span>Florence</span> 
                                  <span className="time">2:45 pm</span>
                                </div> 
                      </div>
                      <div className="chat-profile" onClick={handleChange}>
                      <span className="alert">2</span>
                             <span className="profile-img">
                                    <img src={user3} alt=""/>
                              </span> 
                              <div className="chat-name">
                                   <span>Godwin</span> 
                                  <span className="time">5:04 pm</span>
                                </div> 
                      </div>
                    
                      <div className="chat-profile" onClick={handleChange}>
                      <span className="alert">2</span>
                             <span className="profile-img">
                                    <img src={user3} alt=""/>
                              </span> 
                              <div className="chat-name">
                                   <span>Godwin</span> 
                                  <span className="time">5:04 pm</span>
                                </div> 
                      </div>
                      <div className="chat-profile" onClick={handleChange}>
                      <span className="alert">2</span>
                             <span className="profile-img">
                                    <img src={user3} alt=""/>
                              </span> 
                              <div className="chat-name">
                                   <span>Godwin</span> 
                                  <span className="time">5:04 pm</span>
                                </div> 
                      </div>
                      <div className="chat-profile" onClick={handleChange}>
                      <span className="alert">2</span>
                             <span className="profile-img">
                                    <img src={user3} alt=""/>
                              </span> 
                              <div className="chat-name">
                                   <span>Godwin</span> 
                                  <span className="time">5:04 pm</span>
                                </div> 
                      </div>
                      <div className="chat-profile" onClick={handleChange}>
                      <span className="alert">1</span>
                             <span className="profile-img">
                                    <img src={user3} alt=""/>
                              </span> 
                              <div className="chat-name">
                                   <span>Godwin</span> 
                                  <span className="time">5:04 pm</span>
                                </div> 

                      </div>
                     </div>
                  </div>

               <div className="sub-container" id={change ? "cont-display" : ""}>
                {/* chat header */}

                <div className="chat-header">
                <div className="header-img">
                    <img src={user2} alt=""/>
                </div>
                <div className="active">
                    <h4>Asare Gideon</h4>
                    <h6>3 hours ago..</h6>
                </div>
                <div className="chat-icons">
                    <span className="icon"><CallIcon /> </span>
                    <span className="icon"><InfoIcon /> </span>
                </div>

            </div>
            {/* end of chat header */}
 
            {/* main chat section */}
            <div className="chat-section">
                <div className="mesg-inbox">
                    <div className="chats">
                        <div className="mesg-section">

                            <div className="receive-chat">
                                <div className="receive-img">
                                    <img src={user2} alt=""/>
                                </div>
                                <div className="received-mesg">
                                    <div className="received-inbox">
                                        <p>Hi !! this is message from Gideon</p>
                                        <span className="time">11:34 pm | Decenber 31</span>
                                    </div>
                                </div>
                            </div>

                            <div className="outgoing-chat">
                                
                                <div className="gone-mesg">
                                        <p>Hi !! this is message from me</p>
                                        <span className="time">11:34 pm | Decenber 31</span>
                                </div>
                                <div className="outgoing-img">
                                    <img src={user} alt=""/>
                                </div>
                            </div>

                            <div className="receive-chat">
                                <div className="receive-img">
                                    <img src={user2} alt=""/>
                                </div>
                                <div className="received-mesg">
                                    <div className="received-inbox">
                                        <p>Hi !! this is message from Gideon</p>
                                        <span className="time">11:34 pm | Decenber 31</span>
                                    </div>
                                </div>
                            </div>


                            <div className="outgoing-chat">
                                
                                <div className="gone-mesg">
                                        <p>Hi !! this is message from me</p>
                                        <span className="time">11:34 pm | Decenber 31</span>
                                </div>
                                <div className="outgoing-img">
                                    <img src={user} alt=""/>
                                </div>
                            </div>
                            <div className="receive-chat">
                                <div className="receive-img">
                                    <img src={user2} alt=""/>
                                </div>
                                <div className="received-mesg">
                                    <div className="received-inbox">
                                        <p>Hi !! this is message from Gideon</p>
                                        <span className="time">11:34 pm | Decenber 31</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* end of main chat section */}

                {/* start of chat bottom section */}

                <div className="chat-bottom">
                    <div className="bottom-icons">
                    <span className="b-icon"> </span>
                    <span className="b-icon"> </span>
                    <span className="b-icon"></span>
                    </div>
                    <div className="chat-input">
                        <input type="text" placeholder="write message..." /> <span className="open"><SendIcon /></span>
                        <span className="open"><AttachFile /></span>
                    </div>
                    
                </div>
                {/* end of chat bottom section */}

            </div>
            </div>
               </div>
          
            
            </div> 
        </>
    )
}

export default Chat
