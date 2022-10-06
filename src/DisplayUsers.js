
import './card.css'
import EditPoem from './EditPoem'
import {useState} from 'react'

function DisplayUsers({handleClickDelete, poem}) {


   const [buttonClicked, setButtonClicked] = useState(false)

  function handleClick() {
    handleClickDelete(poem.id)
  }

  function showEdit () {

    setButtonClicked(!buttonClicked)

  }
      
          return (
            <div className="card" >
                <div className="header">
                  {/* can we include anything in here to show the lyrics we're referring to? */}
                  </div>
                <div className="container">
                <p>{poem.poem}</p>
            </div>
            <button onClick={showEdit}> Edit </button>
            <div>
            {buttonClicked ? <EditPoem poem={poem}/> : null}
            </div>
            <button onClick={handleClick}> Delete </button>
        </div>
      )} 
      

export default DisplayUsers