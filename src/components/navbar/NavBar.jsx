import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">home</Link>
    
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link" to="/about">about</Link>
         <Link className="nav-link" onClick={()=>{console.log("click")}} to="/todo">todo list</Link>
        
      </div>
    </div>
  </div>
</nav>


   
        </div>
    )
}

export default NavBar
