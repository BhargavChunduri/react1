import React from 'react'
import user from '../usersData/userData.json'

export default function Table2() {
  const headings = Object.keys(user[1]).map((ind)=> <th>{ind}</th>)
    return (
    <>
        <h1 className='text-center bg-info text-white'> Table(Dynamic)</h1>
    
        <table className='table  table-bordered table-striped'>
            <thead>
                <tr>
                    {headings}
                </tr>
            </thead>
            <tbody>
                {user.map((obj,ind)=>{
                    return <tr key ={ind}>
                    {
                        Object.values(obj).map((val,ind)=>{
                            return <td key = {ind}>{val}</td>
                    } )}     
                    </tr>
                })}
            </tbody>
        </table>
    
    </>
  )
}
