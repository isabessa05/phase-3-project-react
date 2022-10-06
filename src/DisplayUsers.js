
import './card.css'
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
            <div class="card">
                <div class="header">
                  </div>
                <div class="container">
                <p>{poem.poem}</p>
            </div>
            <button onClick={showEdit}> Edit </button>
            <div>
            {buttonClicked ? <h1>Hi</h1> : null}
            </div>
            <button onClick={handleClick}> Delete </button>
        </div>
      )} 
      

export default DisplayUsers