import React from "react";
import {useEffect, useState} from 'react'
import UserPoems from "./UserPoems";
import NewUser from "./NewUser";



function Users ({handleClickDelete, setPoems,handleClickDeleteUser}){


const [users, setUsers] = useState([])
const [userId, setUserId] = useState()
const [buttonClicked, setButtonClicked] = useState(false)



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
        const newUserId = parseInt(e.currentTarget.id)
        handleClickDeleteUser(newUserId)
        console.log(newUserId);
        let newUserArray = users.filter(el=>el.id !== newUserId)
        console.log(users);
        console.log(newUserArray);
        setUsers(newUserArray)
    }

    // function moveBack()
    // {
    //     setButtonClicked(!buttonClicked)
    // }




return (
    <div>
       {buttonClicked?  <UserPoems setPoems={setPoems} handleClickDelete={handleClickDelete} userId = {userId}/> :  users.map((user) => {
        return (
            <div class="user-container" > 
            <div>
            <button className="user-button" onClick={(event) => handleClick(event)} id={user.id}>{user.name}</button>
        {/* </div>
            <div> */}
            <button class = "user-x-button" onClick={(e) => handleClickUser(e)} id={user.id}>X</button>
            </div>
            <br></br>
            </div>

        )
    })}
    </div>
)
}

export default Users