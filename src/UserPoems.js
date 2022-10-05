import PoemCard from "./PoemCard"
import {useEffect, useState} from 'react'


function UserPoems ({userId}){


    const [userPoems, setUserPoems] = useState([])

    const userPoemCards = userPoems.map((poem)=> {
        return <PoemCard poem = {poem}/>
    })


    useEffect(() => {
        fetch(`http://localhost:9292/poems/user/${userId}`)
          .then(res => res.json())
          .then(data =>
            setUserPoems(data))
      }
        , [])

    return (
        <>
            {userPoemCards}
        </>
    )

}

export default UserPoems