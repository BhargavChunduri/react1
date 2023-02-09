import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();
    const fun1 = function (){
        alert("Redirecting To Products")
        navigate("/products")
    }
    return (
        <>
            <h3 className='text-center'>This is Home Component</h3>
            <button className='btn btn-success m-1' onClick={() => { Navigate(1) }}>Go Next</button>
            <button className='btn btn-success m-1' onClick={fun1}>Go To Products</button>
        </>

    )
}
