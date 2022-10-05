import React, { useState } from "react";

function NewPoem () {   

    //call a random lyric 

    const [formInput, setFormInput] = useState({
        poem: "",
        user_id: "",
        lyrics_id: "",
    })

    const newLyric = {
        quote: formInput.quote,
        song: formInput.song,
        album: formInput.album
    }

    function handleChange(e){
        setFormInput({...formInput, [e.target.name]: e.target.value})
    }

    function addLyric(e){
        e.preventDefault()

        fetch("http://localhost:9292/lyrics", {
            method: "POST",
            headers: {
             "Accept": "application/json",
             "Content-Type":"application/json"
        },
        body: JSON.stringify(newLyric),
    });
        
    }

    return (
        <div className="new-lyric-form">
        <h2>Add your own lyric!</h2>
        <form onSubmit={addLyric}>
          <input onChange={handleChange} value={formInput.quote} type="text" name="quote" placeholder="Lyric" />
          <input onChange={handleChange} value={formInput.song} type="text" name="song" placeholder="Song Title" />
          <input onChange={handleChange} value={formInput.album} type="text" name="album" placeholder="Album" /> 
                <button type="submit">ADD LYRIC</button>
        </form>
      </div>
    );
}

export default LyricsForm;