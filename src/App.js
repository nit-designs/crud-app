import React, { useState } from 'react';
import './App.css';
import UserComponent from './components/UserComponent';
import { Route, Switch } from 'react-router-dom';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import { data } from './components/UserData';
import ViewUser from './components/ViewUser';

function App() {
  const [user, setUser] = useState(data);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <UserComponent 
          user ={user}
          setUser ={setUser}
          />
        </Route>
        <Route exact path= "/view/:id">
        <ViewUser
        user ={user} />
        </Route>

        <Route exact path="/add/user">
          <AddUser 
          user ={user}
          setUser={setUser}/>
        </Route>
        
        <Route path="/edit/:id">
          <EditUser
            user={user}
            setUser={setUser}
          />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
