import React from "react";
import { Link } from 'react-router-dom'


function NavBar () {   

    return (
        <nav>
            <div>
        <Link to="/"> Home  </Link>
        <Link to="/poems"> All Poems   </Link>
        <Link to="/users"> Users </Link>
        <Link to="/lyric"> Add your own lyric! </Link>
        <Link to="/newuser"> New User? Start Here! </Link>
        </div>
        </nav>
    )
}

export default NavBar;