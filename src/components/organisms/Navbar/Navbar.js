import React from 'react';
import { NavLink } from 'react-router-dom';
import './_Navbar.scss';


const Navbar = () => {
    return (
       <nav>
           <div className="logo">
               <h1> Kalkulator rachunków </h1>
           </div>
           <div className='navItem'>
           <NavLink to='/'>Home</NavLink>
           <NavLink to='/policz'>Policz</NavLink>

               {localStorage.getItem("name")
                   ? <NavLink to='/rejestracja_uzytkownika'>{localStorage.getItem("name")}</NavLink>
                   : <NavLink to='/rejestracja_uzytkownika'>Rejestracja&nbsp;użytkownika</NavLink>

               }
           </div>
       </nav>
    );

};

export default Navbar;
