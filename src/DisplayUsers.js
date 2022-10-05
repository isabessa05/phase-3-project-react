
import {useEffect, useState} from 'react'
import UserPoems from "./UserPoems"

function DisplayUsers({user, handleClick}) {


    const [userPoems, setUserPoems] = useState([])


    useEffect(() => {
        fetch(`http://localhost:9292/poems/user/${user.id}`)
          .then(res => res.json())
          .then(data =>
            setUserPoems(data))
      }
        , [user.id])

    // function handleClick() {
    //     setButtonClicked(!buttonClicked)
    //     setShowUserPoems(<UserPoems userPoems={userPoems}/>)
    // }


    return (
        <div class="container">
            <button onClick={handleClick}>{user.name}</button>
        </div>
  )

}

export default DisplayUsers