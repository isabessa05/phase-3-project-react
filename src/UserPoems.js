// import PoemCard from "./PoemCard"
import DisplayUsers from './DisplayUsers'
import {useEffect, useState} from 'react'


function UserPoems ({userId}){


    const [userPoems, setUserPoems] = useState([])

    const userPoemCards = userPoems.map((poem)=> {
        return <DisplayUsers poem = {poem}/>
    })


    useEffect(() => {
        fetch(`http://localhost:9292/poems/user/${userId}`)
          .then(res => res.json())
          .then(data =>
            setUserPoems(data))
      }
        , [])

    return (
        <div>
            {userPoemCards}
            <button> Create a new poem </button>
        </div>
    )

}

export default UserPoems