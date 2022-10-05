import React from "react";
import {useEffect, useState} from 'react'
import DisplayUsers from "./DisplayUsers";
import UserPoems from "./UserPoems";



function Users (){


const [users, setUsers] = useState([])
const [showUserPoems, setShowUserPoems] = useState()
const [buttonClicked, setButtonClicked] = useState(false)


useEffect(() => {
    fetch("http://localhost:9292/users")
      .then(res => res.json())
      .then(userData =>
        setUsers(userData))
  }
    , [])



    function handleClick() {
        setButtonClicked(!buttonClicked)
        // setShowUserPoems(<UserPoems userPoems={userPoems}/>)
        console.log("hello")
        console.log(buttonClicked)

        //store id with user.id inside a state and call that inside userpoems to fetch and display the poems for that specific user
    }

    function moveBack()
    {
        setButtonClicked(!buttonClicked)
    }
    const showUsers = users.map((user) => {
        // return <DisplayUsers key={user.id} user = {user} handleClick={handleClick} />
        return (
            <div class="container" > 
            <button onClick={handleClick} id={user.id}>{user.name}</button>
        </div>
        )
    })



return (
    <div>
       {buttonClicked?  null : showUsers}
    </div>
)
}

export default Users