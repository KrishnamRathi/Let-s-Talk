import React from 'react';
import './App.css';
import SideBar from './Sidebar'
import Chat from './Chat'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './Login'
import { useStateValue } from './StateProvider';


function App() {
  const [{user}] = useStateValue();
  return (
    <div className="app">
      {!user ? <Login/> : (
        <div className="app_body">
        <Router>
          <SideBar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
            </Route>
          </Switch>
        </Router>
      </div>
      )}
    </div>
  );
}

export default App;
