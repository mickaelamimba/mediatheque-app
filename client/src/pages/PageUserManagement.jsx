import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";

import {getUser} from "../redux/actions/usersAction";
import UserTable from "../component/user/UserTable";
import TableHead from "../component/user/TableHead";
import {Alert, Spinner} from "react-bootstrap";

const PageUserManagement = ({getUser,user}) => {
    const [userToValidate, setUserToValidate]= useState('')
    useEffect(() =>{
        getUser()
    },[getUser,userToValidate])

    return (

        <section>
            {userToValidate&&
            <Alert  variant='success'>
                {userToValidate}
            </Alert>
            }

            <h1>Gestion des utilsateur</h1>
            <hr/>
            <TableHead>
                {user.loading?(
                    <tr>
                        <th>
                            <Spinner animation="border" size="sm" />
                            <Spinner animation="border" />
                        </th>
                    </tr>


                ):user.error ?(
                    <th>
                        <h2>{user.error}</h2>
                    </th>

                ):(user.user?
                    user.user.map((item,i)=>(
                        <UserTable key={i} setUserToValidate={setUserToValidate} {...item}/>
                    )):
                        <p>user not fund</p>
                )

                }
            </TableHead>



        </section>
    );
};
const mapStateToProps  = (state) => ({user:state.user})
export default connect(mapStateToProps,{getUser})(PageUserManagement);