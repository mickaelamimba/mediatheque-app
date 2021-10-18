import React from 'react';
import {Container, Navbar, Stack} from "react-bootstrap";
import MenuItems from "./MenuItems";
import {useOpenModal} from "../../../context/OpenModalContext";

const Menu = () => {
    const {handleSubmitOffcanvas}=useOpenModal()
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/" >Mediatheque</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <MenuItems/>

                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Stack direction="horizontal" gap={2}>
                        <button type="button" className="btn btn-info mr-4 " onClick={handleSubmitOffcanvas}>
                            Mes livres  <span className="badge bg-secondary">4</span>
                        </button>
                            <button type="button" className="btn btn-primary ">
                                Connextion
                            </button>
                    </Stack>

                </Navbar.Collapse>

            </Container>
            
        </Navbar>
    );
};

export default Menu;