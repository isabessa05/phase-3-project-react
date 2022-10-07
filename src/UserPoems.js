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

    return (
        <div>
            {userPoemCards}
            <button onClick={handleNewLyric}> Create a new poem </button>
            <div>
                {buttonClicked ? <NewPoem setUserPoems={setUserPoems} lyric={lyric} userId={userId} /> : null}
            </div>

        </div>
    )

}

export default UserPoems