import React, { useState } from "react";

function NewPoem ({userId,setPoems, lyric}) {   

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

    function addPoem(e){
        e.preventDefault()

        fetch("http://localhost:9292/poems", {
            method: "POST",
            headers: {
             "Accept": "application/json",
             "Content-Type":"application/json"
        },
        body: JSON.stringify(newPoem),
    })
    .then(res=>res.json())
    .then(data=> setPoems((prev)=>[...prev,data]))

    //add state to post to the page
    //add state for the array of all the poems - the new poem will be sent over and we will add the new poem to the array of all poems
    //i.e. set poems to ...all poems, new poem]
        
    }

    return (
        <div className="new-poem-form">
            <h1>Your quote is: {lyric.quote}</h1>
        <form onSubmit={addPoem}>
          <input onChange={handleChange} value={formInput.poem} type="text" name="poem" placeholder="Create your art " />
                <button type="submit">Post it!</button>
        </form>
      </div>
    );
}

export default NewPoem;