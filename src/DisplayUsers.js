
import './card.css'
import EditPoem from './EditPoem'
import { useState } from 'react'

function DisplayUsers({ handleClickDelete, poem }) {


  const [buttonClicked, setButtonClicked] = useState(false)
  const [thisPoem, setThisPoem] = useState(poem)

  function handleClick() {
    handleClickDelete(thisPoem.id)
  }

  function showEdit() {

    setButtonClicked(!buttonClicked)

  }



  //EDIT POEM 

    const [formInput, setFormInput] = useState({
        poem: "",
    })

    function handleChange(e) {
        setFormInput(e.target.value)
        console.log(formInput)
    }

    const editedPoem = {
        poem: formInput
    }

    function editPoem(e) {
        e.preventDefault()

        fetch(`http://localhost:9292/poems/${poem.id}`, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedPoem),
        });
        // let newPoemArray = poem.filter(el=>el.id !== newUserId)
        setThisPoem(editedPoem)

    }


  function ePoem() {
    return (


      <div>
        <form onSubmit={(e) => editPoem(e)}>
          <input onChange={(e) => handleChange(e)} value={formInput.poem} type="text" name="edit-poem" placeholder={thisPoem.poem} />
          <button>Save</button>
        </form>
      </div>


    )
  }



  return (
    <div className="card" >
      <div className="header">
        {/* can we include anything in here to show the lyrics we're referring to? */}
      </div>
      <div className="container">
        <p>{thisPoem.poem}</p>
      </div>
      <button onClick={showEdit}> Edit </button>
      <div>
        {buttonClicked ? ePoem() : null}
      </div>
      <button onClick={handleClick}> Delete </button>
    </div>
  )
}


export default DisplayUsers