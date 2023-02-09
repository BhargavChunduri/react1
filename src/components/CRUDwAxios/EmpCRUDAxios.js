import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Modal from 'react-modal'
import Swal from 'sweetalert2'
import EmpAddAxios from './EmpAddAxios'
import EmpListAxios from './EmpListAxios'

export default function EmpCRUDAxios() {
    
    const [data,setData] = useState([])
    const fetchUsers = async ()=>{
        const edata = await axios.get(" http://localhost:4000/empData")    
        //console.log(edata)
        setData(edata.data)
    }
    useEffect(()=>{
        fetchUsers()
        delEmp()
        //addEmp()
    },[data])
    const delEmp = async(val)=>{
        //console.log(val);
        await axios.delete(`http://localhost:4000/empData/${val}`)
        //const modifiedData = await axios.delete(`http://localhost:4000/empData/${val}`)
        //console.log(modifiedData);
    }
    const addEmp = async (val)=>{
        console.log(val);
        await axios.post('http://localhost:4000/empData',{
            "name" :val.name,
            "email":val.email,
        })
    }
    const viewEmp =(val)=>{
        const emp = data.find((obj)=>{
            return obj.id === val
        })
        Swal.fire(
            `Hi ${emp.name}`,
            `your id is ${emp.id} and your email is ${emp.email}`,
            'success'
        )
    }
    const [modalIsOpen , setModelIsOpen] =useState(false)
    const updateEmp = (val)=>{
        setModelIsOpen(true)
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {/* {console.log(data)} */}
                    <div className='col-sm-8'>
                        <EmpListAxios data ={data} delEmp={delEmp} viewEmp={viewEmp} updateEmp={updateEmp}/>
                    </div>
                    <div className='col-sm-4'>
                        <EmpAddAxios addEmp = {addEmp}/>
                    </div>
                </div>
            </div>
        </>
    )
}
