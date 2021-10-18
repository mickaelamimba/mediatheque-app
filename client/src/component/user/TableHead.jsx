import React from 'react';

const TableHead = ({children}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Date de naissance</th>
                <th>Adresse postale</th>
                <th>status</th>
                <th>...</th>
            </tr>
            </thead>
            <tbody>
            {children}
            </tbody>

        </table>
    );
};

export default TableHead;