import React from "react";
import {useEffect, useState} from 'react'
import UserPoems from "./UserPoems";
import NewUser from "./NewUser";



function Users ({handleClickDelete, handleClickDeleteUser}){


const [users, setUsers] = useState([])
const [userId, setUserId] = useState()
const [buttonClicked, setButtonClicked] = useState(false)
const showUserPoems = <UserPoems handleClickDelete={handleClickDelete} userId = {userId}/>


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
    }

    function handleClickUser (e) {
        const newUserId = (e.currentTarget.id)
        handleClickDeleteUser(newUserId)
    }

    // function moveBack()
    // {
    //     setButtonClicked(!buttonClicked)
    // }


    const showUsers = users.map((user) => {
        return (
            <div class="container" > 
            <div>
            <button onClick={(event) => handleClick(event)} id={user.id}>{user.name}</button>
        </div>
            <div>
            <button onClick={(e) => handleClickUser(e)} id={user.id}>X</button>
            </div>
            <br></br>
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