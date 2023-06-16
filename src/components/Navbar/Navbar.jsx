import React from 'react';
import { Link } from 'react-router-dom';



export default function Navbar({userData , logOut}) {

  return <nav className="p-2 d-flex flex-md-row flex-column justify-content-between"> 

    <div className="left-nav flex-md-row flex-column d-flex align-items-center">
      <h1 className="m-0 pe-3">Noxe</h1>

      {userData?
      <ul className="list-unstyled d-flex m-0 align-items-center" >
      <li className="lpx-2"><Link to="/">Home</Link></li>

      <li className="px-2"><Link to="movies">Movies</Link></li>
      <li className="px-2"><Link to="tv">Tv</Link></li>
      <li className="px-2"><Link to="people">People</Link></li>
      
    </ul>
    :''}
      
    </div>


    

    <div className="right-nav d-flex flex-md-row flex-column align-items-center">
      <div className="social-media">
            <i className="fab mx-1 fa-facebook"></i>
            <i className="fab mx-1 fa-instagram"></i>
            <i className="fab mx-1 fa-twitter"></i>
            <i className="fab mx-1 fa-spotify"></i>
            <i className="fab mx-1 fa-youtube"></i>
      </div>


      <ul className="list-unstyled d-flex m-0 align-items-center" >
        
        
        {userData?
        <>
        <li onClick={logOut} className="px-2 cursor-pointer"><span>LogOut</span></li>
        <li className="px-2"><Link to="profile">Profile</Link></li>
        </>
      :
      <>
        <li className="px-2"><Link to="login">Login</Link></li>
        <li className="px-2"><Link to="register">Register</Link></li>
      </>
      
      }
        
        
        
        
      </ul>
    </div>

  </nav>
}
