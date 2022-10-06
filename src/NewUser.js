import React, { useState } from "react";

function NewUser () {   

    const [formInput, setFormInput] = useState({
        name: "",
    })

    const newUser = {
        name: formInput
    }

    function handleChange(e){
        setFormInput(e.target.value)
    }

    function addUser(e){
        e.preventDefault()

        fetch("http://localhost:9292/users", {
            method: "POST",
            headers: {
             "Accept": "application/json",
             "Content-Type":"application/json"
        },
        body: JSON.stringify(newUser),
    });

        
    }

    return (
        <div className="new-user-form">
            <h2>Welcome to Poemland</h2>
            <h3> blablabalbalbla </h3>
        <form onSubmit={addUser}>
          <input onChange={handleChange} value={formInput.name} type="text" name="name" placeholder="User name " />
                <button type="submit"> Create </button>
        </form>
      </div>
    );
}

export default NewUser;