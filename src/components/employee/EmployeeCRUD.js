import React, { useState } from 'react'
import EmployeeADD from './EmployeeADD'
import EmployeeList from './EmployeeList'
import swal from 'sweetalert2'
import Modal from 'react-bootstrap/Modal';

export default function EmployeeCRUD() {
    const originalData = [
        { eid: 101, ename: 'James Cameron', sal: '15m$' },
        { eid: 102, ename: 'Taika Waititi', sal: '15m$' },
        { eid: 103, ename: 'Christopher Nolan', sal: '15m$' },
    ];
    const [modifiedData, setModifiedData] = useState(originalData);
    const delRow = (val) => {
        // doubt: if use originalData Not coming o/p as desired
        let temp = modifiedData.filter((obj) => {
            return obj.eid !== val;
        });
        setModifiedData(temp);
    }
    const addEmp = (val) => {
        let temp = [...modifiedData, val];
        setModifiedData(temp);
    }
    // const viewEmp = (val)=>{
    //     const temp = modifiedData.filter((obj)=>{
    //         return obj.eid === val;
    //     })
    //     // const t = JSON.stringify(temp);
    //      alert(temp.eid +temp.ename +temp.sal);
    //     // console.log(temp);
    //     //alert(`Hi+ ${temp.eid}`)
    // }
    const viewEmp = (val) => {
        const temp = modifiedData.find((obj) => {
            return obj.eid === val;
        })
        swal.fire(
            'Hi Mr.',
            (temp.ename + ` your id is ` + temp.eid + ` your Net Worth is ` + temp.sal),
            'success'
        );
    }
    const [id,setEid] = useState();
  const [Name,setName] = useState();
  const [Sal , setSal] = useState();
    const [flag, setFlag] = useState(false);
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
    const editEmp = (val) => {
        console.log('Hi');
        setFlag(true);
        <Modal show={flag}>
            <Modal.Header>
                <Modal.Title>Edit Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <input type='text' value={val.eid} name='eid'onChange={change} /><br />
                    <input type='text' value={val.ename} name='ename' onChange={change}/><br />
                    <input type='text' value={val.sal} name='sal' onChange={change}/><br />
                    <button className='btn btn-primary' onClick={() => {
                        let emp = {
                            eid: id,
                            ename: Name,
                            sal: Sal,
                        }
                    }}
                        > Edit
                        </button>
            </form>
        </Modal.Body>
        </Modal >
    }
return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-8'>
                    <EmployeeList modifiedData={modifiedData} delRow={delRow} viewEmp={viewEmp} editEmp={editEmp} />
                </div>
                <div className='col-sm-4'>
                    <EmployeeADD addEmp={addEmp} />
                </div>
            </div>
        </div>
    </>
)
}
