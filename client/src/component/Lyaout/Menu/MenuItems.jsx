import React from 'react';
import { Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const MenuItems = () => {
    return (
        <>
            <Navbar.Text>
                <NavLink className="nav-link" exact activeClassName="active" to='/'>Home</NavLink>
            </Navbar.Text>
             <Navbar.Text>
                 <NavLink className="nav-link" exact activeClassName="active" to='/ajouter-un-livre'>Ajouter un livre</NavLink>
            </Navbar.Text>
             <Navbar.Text>
                 <NavLink className="nav-link" exact activeClassName="active" to='/gestions-utilisateurs'>Gestions utilisateurs</NavLink>
            </Navbar.Text>
             <Navbar.Text>
                 <NavLink className="nav-link" exact activeClassName="active" to='/mon-compte'>Mon compte</NavLink>
            </Navbar.Text>


        </>
    );
};

export default MenuItems;