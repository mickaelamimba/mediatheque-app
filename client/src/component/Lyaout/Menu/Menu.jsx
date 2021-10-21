import React, {useEffect} from 'react';
import {Container, Navbar, Stack} from "react-bootstrap";
import MenuItems from "./MenuItems";
import {useOpenModal} from "../../../context/OpenModalContext";
import {connect} from "react-redux";
import {getLoan} from "../../../redux/actions/loanAction";

import {useHistory} from "react-router-dom";

const Menu = ({loan,getLoan}) => {
    let history = useHistory();


    let isAuth = window.localStorage.getItem('isAuthenticated')
    useEffect(() =>{
        getLoan()
    },[getLoan])
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
                            Mes livres  <span className="badge bg-secondary">{loan?.loan.count}</span>
                        </button>
                        {isAuth ?
                            <button onClick={()=>history.push('/logout')}  type="button" className="btn btn-danger ">
                                Déconnextion
                            </button>:
                            <button onClick={()=>history.push('/login')} type="button" className="btn btn-primary ">
                                Connextion
                            </button>
                        }


                    </Stack>

                </Navbar.Collapse>

            </Container>
            
        </Navbar>
    );
};
const mapStateToProps  = (state) => ({loan:state.loan})
export default connect(mapStateToProps,{getLoan})(Menu);