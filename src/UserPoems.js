// import PoemCard from "./PoemCard"
import DisplayUsers from './DisplayUsers'
import { useEffect, useState } from 'react'
import NewPoem from './NewPoem'


function UserPoems({ userId }) {


    const [userPoems, setUserPoems] = useState([])
    const [lyric, setLyric] = useState({})
    const [buttonClicked, setButtonClicked] = useState(false)


    function handleClickDelete(poemId) {
        fetch(`http://localhost:9292/poems/${poemId}`,
            { method: 'DELETE' })
        let newUserArray = userPoems.filter(el => el.id !== poemId)
        console.log(newUserArray);
        setUserPoems(newUserArray)

    }


    const userPoemCards = userPoems.map((poem) => {
        return <DisplayUsers handleClickDelete={handleClickDelete} poem={poem} />
    })


    function handleNewLyric() {
        setButtonClicked(!buttonClicked)
        fetch("http://localhost:9292/lyrics")
            .then(res => res.json())
            .then(lyricData =>
                setLyric(lyricData))

    }


    useEffect(() => {
        fetch(`http://localhost:9292/poems/user/${userId}`)
            .then(res => res.json())
            .then(data =>
                setUserPoems(data))
    }
        , [])


    function addPoem(e, newPoem) {
        e.preventDefault()

        fetch("http://localhost:9292/poems", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPoem),
        })
            .then(res => res.json())
            .then(data => setUserPoems([...userPoems, data]))

    }

    return (
        <div className='user-poems-container'>
            {userPoemCards}
            <button className="dark-green-button" onClick={handleNewLyric}> Create A New Poem </button>
            <div>
                {buttonClicked ? <NewPoem addPoem={addPoem} lyric={lyric} userId={userId} /> : null}
            </div>

        </div>
    )

}

export default UserPoems