import React from 'react'
import {Link} from "react-router-dom";

const Navbar =()=> {
  
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">NewsMonkey</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home </Link>
                </li>
                <li><Link className="nav-link" to="/business">business</Link></li>
                <li><Link className="nav-link" to="/entertainment">entertainment</Link></li>
                <li><Link className="nav-link" to="/general">general</Link></li>
                <li><Link className="nav-link" to="/health">health</Link></li>
                <li><Link className="nav-link" to="/science">science</Link></li>
                <li><Link className="nav-link" to="/sports">sports</Link></li>
                <li><Link className="nav-link" to="/technology">technology</Link></li>
            </ul>
        </div>
    </nav>
      
    )
  
}

export default Navbar