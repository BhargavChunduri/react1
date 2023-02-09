import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AboutUs() {
  
    const navigate = useNavigate();
    const fun2 = ()=>{
        alert("Redirect To Products");
        navigate("/products");
    }
    return (
    <>
        <h3 className='text-center'>This is Aboutus Component </h3><br/><br/>
        <button className='btn btn-warning m-1' onClick={()=>{navigate(-1)}}>Go Previous</button>&nbsp;&nbsp;&nbsp;
        <button className='btn btn-warning m-1' onClick={fun2}>Go To Products</button>&nbsp;&nbsp;&nbsp;
    </>
  )
}
