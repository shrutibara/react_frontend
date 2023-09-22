import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css'

function Navbar({onLogout}) {
   const [username, setUsername] = useState(false);

   const navigate = useNavigate();

   useEffect(() => {
      let userObj = JSON.parse(sessionStorage.getItem("usesDetailes"));
      console.log(userObj);
      setUsername(userObj.username);
   }, []);

   const handleLogout = () => {
      onLogout();
       navigate("/");
   }



   return (<>

   <div className='home-container'>
         <nav className='head'>
         <h2 className='home-heading-style'> BlogApp profile {username} </h2>
         <button className="button-css" onClick={handleLogout}>Logout</button>
         </nav>
      </div>
   </>);
}

export default Navbar;