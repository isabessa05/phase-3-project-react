import React from "react";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import AllPoems from './AllPoems'
import NavBar from './NavBar';
import Users from "./Users";
import LyricsForm from "./LyricsForm";
import NewUser from "./NewUser";

function App() {

  const [poems, setPoems] = useState([])





  useEffect(() => {
    fetch("http://localhost:9292/poems")
      .then(res => res.json())
      .then(data =>
        setPoems(data))
  }
    , [])


  
    function handleClickDelete(poemId) {
      fetch(`http://localhost:9292/poems/${poemId}`, 
      { method: 'DELETE' })
    }

    function handleClickDeleteUser(userId) {
      fetch(`http://localhost:9292/users/${userId}`, 
      { method: 'DELETE' });




      // eventually delete all the poems of the user as you delete the user
      // fetch(`http://localhost:9292/poems/user/${userId}`,
      // { method: 'DELETE' })
    }








  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/poems'>
          <AllPoems poems={poems} />
        </Route>
        <Route exact path='/users'>
          <Users setPoems={setPoems}  handleClickDeleteUser={handleClickDeleteUser} handleClickDelete={handleClickDelete}/>
        </Route>
        <Route exact path='/lyric'>
          <LyricsForm/>
        </Route>
        <Route exact path='/newuser'>
          <NewUser />
        </Route>
        <Route exact path='/lyric'>
          <LyricsForm/>
        </Route>
      </Switch>
    </div>
  )

}

export default App;
