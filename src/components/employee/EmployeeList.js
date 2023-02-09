import React from 'react'
 

export default function EmployeeList({modifiedData,delRow,viewEmp,editEmp}){
    // const {modifiedData} = props.modifiedData;
    //  console.log(modifiedData);
    return (
        <>
            <table className='table  table-bordered '>
                <thead>
                    <tr>
                        <th>EID</th>
                        <th>ENAME</th>
                        <th>SAL</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  {modifiedData.map((obj,ind)=>{
                    return(
                        <tr key={ind}>
                            <td>{obj.eid}</td>
                            <td>{obj.ename}</td>
                            <td>{obj.sal}</td>
                            <td>
                                <button className='btn btn-danger text-dark' onClick={()=>delRow(obj.eid)}>Del</button>
                                &nbsp;&nbsp;&nbsp;
                                <button className='btn btn-success text-dark'onClick={()=>viewEmp(obj.eid)} >view</button>
                                &nbsp;&nbsp;&nbsp;
                                <button className='btn btn-success text-dark'onClick={()=>editEmp(obj.eid)} >Edit</button>
                            </td>   
                        </tr>
                    )
                  })}
                </tbody>
            </table>
        </>
    )
}
