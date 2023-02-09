import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function HTTPDemo2() {
    const [users, setUsers] = useState([])
    const fetchUsers = async () => {
        const users = await fetch("https://fakestoreapi.com/users");
        const finalUsers = await users.json();
        setUsers(finalUsers);
        //console.log(finalUsers);
    }
    useEffect(() => {
        fetchUsers()
    })
    return (
        <>
            <div className='container my-3'>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Address</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user,ind)=>{
                                return <tr key = {ind}>
                                    <td>{user.address.city}</td>
                                    {/* const name = user.name.firstname + user.name.lastname */}
                                    <td>{user.name.firstname }</td>
                                    <td>{user.email}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}
