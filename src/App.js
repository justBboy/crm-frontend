import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import {useSelector} from 'react-redux';
import { selectUser } from './slices/authSlice';
import User from './images/user-3.png'
import Dashboard from './componets/main/Dashboard'
import Chat from  './componets/chat/Chat'
import Signup from './componets/signup/Signup'
import Exchat from './componets/external_chat/exchat';
import Sidebar from './componets/sidebar/Sidebar'
import Events from './componets/events/Events'
import Note from './componets/notes/Note';
import Lead from './componets/leads/Lead';
import Tasks from './componets/tasks/Tasks';
import Contacts from './componets/contacts/Contacts';
import Projects from './componets/projects/Projects';
import Clients from './componets/clients/Clients';


//css
import './global-styles.css'
import './componets/main/medial.css'

function App() {
  const user = useSelector(selectUser);

  return (
    <>
    <Router>
    {user ?
    <>
    <Sidebar image={User} />
    <Route path="/" exact component={Dashboard} />
    <Route path="/chat" component={Chat} />
    <Route path="/events" component={Events} />
    <Route path="/exchat" component={Exchat} />
    <Route path="/notes" component={Note} />
    <Route path="/leads" component={Lead} />
    <Route path="/tasks" component={Tasks} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/projects" component={Projects} />
    <Route path="/clients" component={Clients} />
    </>
    :
    <Signup />
  }
  </Router>
    </>
  );
}

export default App;
