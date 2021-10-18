import React from 'react';
import moment from 'moment';

const UserTable = ({user,status}) => {
    return (
        <tr>
            <th >{user.name}</th>
            <td>{user.firstName}</td>
            <td>{user.email}</td>
            <td>{moment(user.birthDate).subtract(10, 'days').calendar()}</td>
            <td>{user.address}</td>
            <td>{status}</td>
            <td>
                {!user.validateAccount? <button className="btn btn-outline-warning">Valider</button>:
                    <button className="btn btn-success" disabled>Valider</button>

                }

            </td>

        </tr>
    );
};

export default UserTable;