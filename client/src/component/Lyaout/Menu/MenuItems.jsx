import React from 'react';
import { Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";


const MenuItems = () => {
    const isAuthenticated = window.localStorage.getItem('isAuthenticated')
    let usrRole =JSON.parse(isAuthenticated)
    return (
        <>
            <Navbar.Text>
                <NavLink className="nav-link" exact activeClassName="active" to='/'>Home</NavLink>
            </Navbar.Text>
            {usrRole?
                usrRole.role === 'Employe' ?
                <Navbar.Text>
                    <NavLink className="nav-link" exact activeClassName="active" to='/ajouter-un-livre'>Ajouter un livre</NavLink>
                </Navbar.Text> :null:null
            }
            {usrRole?
                usrRole.role === 'Employe' ?
                <Navbar.Text>
                    <NavLink className="nav-link" exact activeClassName="active" to='/gestions-utilisateurs'>Gestions utilisateurs</NavLink>
                </Navbar.Text> : null:null
            }


             <Navbar.Text>
                 <NavLink className="nav-link" exact activeClassName="active" to='/mon-compte'>Mon compte</NavLink>
            </Navbar.Text>
            <Navbar.Text>
                 <NavLink className="nav-link" exact activeClassName="active" to='/mes-livres'>Mes livres</NavLink>
            </Navbar.Text>


        </>
    );
};

export default MenuItems;