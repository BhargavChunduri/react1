import React, { useState } from 'react'

export default function EmpAddAxios({addEmp}) {
  
  const [Id,setEid] = useState();
  const [Name,setName] = useState();
  const [Email , setEmail] = useState();
  const change=(e)=>{
    if(e.target.name === 'eid'){
      setEid(e.target.value);
    }
    else if(e.target.name ==="ename"){
      setName(e.target.value);
    }else{
      setEmail(e.target.value);
    }

  }
  return (
    <>
      <div className='border'>
        <div>Eid :<input name='eid' placeholder='Enter ID' onChange={change}/></div><br/>
        <div>EName :<input name='ename' placeholder='Enter Name' onChange={change}/></div><br/>
        <div>Email :<input name='email' placeholder='Enter email' onChange={change}/></div><br/>
        <div>
          <button className='btn btn-info m-1 offset-5' onClick={()=>{
              let emp={
                id : Id,
                name:Name,
                email:Email,
            }
            addEmp(emp)
          }
          }>Add</button>
        </div>
      
      </div>
    </>
  )
}
