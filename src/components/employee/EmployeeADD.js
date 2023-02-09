import React, { useState } from 'react'

export default function EmployeeADD({addEmp}) {
  const [id,setEid] = useState();
  const [Name,setName] = useState();
  const [Sal , setSal] = useState();

  const change =(e)=>{
    if(e.target.name === 'eid'){
      setEid(e.target.value);
    }
    else if(e.target.name ==="ename"){
      setName(e.target.value);
    }else{
      setSal(e.target.value);
    }
  }
  // console.log(id);
  // console.log(Name);
  // console.log(Sal);

  
  return (
    <>
      <div className='border' align='center'>
        <div className='m-2'> EID : <input name = "eid" placeholder="Enter Eid" onChange={change} /></div>
        <br/>
        <div className='m-2'>ENAME:<input name = "ename" placeholder="Enter ENmae" onChange={change}/></div>
        <br/>
        <div className='m-2'> Sal : <input name = "sal" placeholder="Enter Sal" onChange={change} /></div>
        <br/>      
        <div><button className='btn btn-info' onClick = {()=>{
          let emp={
            eid : id,
            ename: Name,
            sal :Sal ,
          }
          addEmp(emp);
        }}>Add</button></div>

      </div>
    </>
  )
}
