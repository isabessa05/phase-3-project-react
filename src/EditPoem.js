import {useState} from 'react'

function EditPoem({ poem }) {

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
        })
    };

    return (

        <div>
            <form onSubmit={(e) => editPoem(e)}>
                <input onChange={(e) => handleChange(e)} value={formInput.poem} type="text" name="edit-poem" placeholder={poem.poem} />
                <button>Save</button>
            </form>
        </div>


    )
}


export default EditPoem