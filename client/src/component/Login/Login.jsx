import React from 'react';
import {Modal} from "react-bootstrap";
import {ErrorMessage, Field, Form, Formik} from "formik";
import LoginForm from "./LoginForm";

const Login = ({setModalShow}) => {
    return (
        <Modal show={true}
               onHide={setModalShow}
               size="lg"
        >
            <Modal.Header>
                <Modal.Title>
                    Connexion
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <LoginForm/>

            </Modal.Body>
            
        </Modal>
    );
};

export default Login;