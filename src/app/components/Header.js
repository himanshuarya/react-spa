import React from 'react';

import {NavLink} from 'react-router-dom';

export default function Header(){
     
    return (
        <div>

            <NavLink to="/"  exact className="button" activeClassName="success" >
                Home
            </NavLink>

            <NavLink to="/states" className="button" activeClassName="success">
                States
            </NavLink>

            <NavLink to="/about" className="button" activeClassName="success">
                About
            </NavLink>

            <NavLink to="/contact" className="button" activeClassName="success">
                Contact
            </NavLink>
                                
        </div>
    )
}