import React from "react";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import AllPoems from './AllPoems'
import NavBar from './NavBar';
import Users from "./Users";

function App() {

  const [poems, setPoems] = useState([])



  useEffect(() => {
    fetch("http://localhost:9292/poems")
      .then(res => res.json())
      .then(data =>
        setPoems(data))
  }
    , [])


  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/poems'>
          <AllPoems poems={poems} />
        </Route>
        <Route exact path='/users'>
          <Users />
        </Route>
        <Route exact path='/lyric'>
          <LyricsForm/>
        </Route>
      </Switch>
    </div>
  )

}

export default App;
