import React from 'react'

export default function EmpListAxios({data,delEmp,viewEmp,updateEmp}) {
  return (
    <>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>EID</th>
            <th>Empname</th>
            <th>Empemail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((obj,ind)=>{
            return <tr key ={ind}>
              <td>{obj.id}</td>
              <td>{obj.name}</td>
              <td>{obj.email}</td>
              <td>
              <button className='btn btn-danger m-1' onClick={()=>(delEmp(obj.id))}>Del</button>
              <button className='btn btn-success m-1' onClick={()=>{viewEmp(obj.id)}}>View</button>
              <button className='btn btn-warning m-1' onClick={()=>{updateEmp(obj.id)}}>Update</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </>
  )
}
