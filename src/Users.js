import React from "react";
import {useEffect, useState} from 'react'
import UserPoems from "./UserPoems";



function Users (){


const [users, setUsers] = useState([])
const [userId, setUserId] = useState()
const [buttonClicked, setButtonClicked] = useState(false)
const showUserPoems = <UserPoems userId = {userId}/>


useEffect(() => {
    fetch("http://localhost:9292/users")
      .then(res => res.json())
      .then(userData =>
        setUsers(userData))
  }
    , [])


    function handleClick(event) {
        setButtonClicked(!buttonClicked)
        setUserId(event.currentTarget.id)
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
            <button onClick={(event) => handleClick(event)} id={user.id}>{user.name}</button>
        </div>
        )
    })


return (
    <div>
       {buttonClicked?  showUserPoems : showUsers}
    </div>
)
}

export default Users