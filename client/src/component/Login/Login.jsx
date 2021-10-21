import React, {useState} from 'react';
import {Alert, Button, Modal} from "react-bootstrap";

import LoginForm from "./LoginForm";
import {login} from "../../redux/actions/usersAction";
import {connect} from "react-redux";
import {Redirect, useHistory} from "react-router-dom";


const Login = ({setModalShow,login,user}) => {
    let history = useHistory();
    let message
    const [show, setShow]=useState(true)
    const handleSubmit =(values)=>{

        login(values)
        let connectInfo = JSON.stringify(user.loginInfo)

        if(user.loginInfo.token && user.loginInfo.validateAccount ){
            window.localStorage.setItem("isAuthenticated",connectInfo)
          return  <Redirect to='/'/>
        }else{
             message ="Your account has not yet been validated"
        }

    }
    return (
        <Modal show={show}
               onHide={setModalShow}
               size="lg"
        >
            <Modal.Header>

                <Modal.Title>
                    Connexion
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {user.loginInfo.error &&
                <Alert variant="danger">
                    {user.loginInfo.error}
                </Alert>
                }
                {message&&
                <Alert variant="danger">
                    {message}
                </Alert>
                }

                <LoginForm handleLogin={handleSubmit}/>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>history.push('/register')}>Inscription</Button>
            </Modal.Footer>
            
        </Modal>
    );
};
const mapStateToProps  = (state) => ({user:state.user})
export default connect(mapStateToProps,{login}) (Login);