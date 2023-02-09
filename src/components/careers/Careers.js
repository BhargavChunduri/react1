import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Careers() {
    const navigate = useNavigate();
    function fun3() {
        alert("Redirect To Products");
        navigate("/products")
    }
    return (
        <>
            <h3 className='text-center'> This is Careers</h3>
            <Link to='/home' style={{ textDecoration: 'none', color: 'black' }}>Go to Home</Link>
            <button className='btn btn-info' onClick={fun3}> Go To Products</button><br /><br />

            <div>
                For PermanentJobs :<button className='btn btn-success'>
                    <Link to='/careers/permanentJob' style={{ textDecoration: 'none' }} className='text-light'>Permanent Jobs</Link>
                </button>&nbsp;&nbsp;
                For contractJobs :<button className='btn btn-warning'>
                    <Link to='/careers/contractJob' style={{ textDecoration: 'none' }} className='text-light'>Contract Jobs</Link>
                </button>
                <Outlet />
            </div>
        </>
    )
}
