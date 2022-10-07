import React, { useState } from "react";

function NewPoem ({userId, addPoem, lyric}) {   

    const [formInput, setFormInput] = useState({
        poem: "",
    })


    const newPoem = {
        poem: formInput.poem,
        user_id: userId,
        lyric_id: lyric.id
    }

    function handleChange(e){
        setFormInput({...formInput, [e.target.name]: e.target.value})
    }

    function handleSubmit (e) {
        addPoem(e, newPoem)
    }


    return (
        <div className="new-poem-form">
            <h1>Your quote is: {lyric.quote}</h1>
        <form onSubmit={(e) => handleSubmit(e)} >
          <input onChange={handleChange} value={formInput.poem} type="text" name="poem" placeholder="Create your art " />
                <button type="submit">Post it!</button>
        </form>
      </div>
    );
}

export default NewPoem;