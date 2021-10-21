import React from 'react';
import moment from 'moment';
import axios from "axios";

const UserTable = ({user,status,setUserToValidate}) => {
    const handelValidate= async(email)=>{
        const data = {email :email}
        const res = await axios.post('/validate',data)
        setUserToValidate(res.data.message)
        console.log(res)
    }
    return (
        <tr>
            <th >{user.name}</th>
            <td>{user.firstName}</td>
            <td>{user.email}</td>
            <td>{moment(user.birthDate).subtract(10, 'days').calendar()}</td>
            <td>{user.address}</td>
            <td>{status}</td>
            <td>
                {!user.validateAccount? <button onClick={()=>handelValidate(user.email)}  className="btn btn-outline-warning">Valider</button>:
                    <button className="btn btn-success" disabled>Valider</button>

                }

            </td>

        </tr>
    );
};

export default UserTable;