import React from 'react';
import {Offcanvas} from "react-bootstrap";

const BookOfCanvas = ({show,handleClose}) => {
    return (
        <>
        <Offcanvas placement='start' show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Mes livres</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                Vous avez pa enprunter de livre
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
};

export default BookOfCanvas;