import React from 'react'

export default function Table1() {
    let employees = [
    { eId: 101, name: "sanjay", sal: 5000 },
    { eId: 104, name: "deepak", sal: 8000 },
    { eId: 103, name: "ranjan", sal: 7000 },
    { eId: 102, name: "manoj", sal: 9000 }
]
  return (
   <>
    <h1 className='text-center bg-secondary text-white'> Employee Table</h1>
    <table className='table table-striped table-bordered'>
    <thead>
        <tr>
            <th>eId</th>
            <th>Name</th>
            <th>Salary </th>
        </tr>
    </thead>
    <tbody>
        {employees.map((emp,ind)=>{
            return <tr key = {ind}>
                <td>{emp.eId}</td>
                <td>{emp.name}</td>
                <td>{emp.sal}</td>
            </tr>
        })}
    </tbody>
    </table>
   
    </>
  )
}
