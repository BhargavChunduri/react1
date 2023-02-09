import React from 'react'
import { useState } from 'react'

export default function RegistrationForm() {
    const [user, setUser] = useState({
        fname: 'Bhargav',
        lname: 'chunduri',
        email: 'xyz@gamil.com',
        address: 'Guntur , AndhraPradesh',
        course: 'React',
        gender: 'Male'
    });
    // console.log(user);
    return (

        <div className='container' >
            <div className='row  shadow p-3 mb-5 bg-body rounded' style={{ width: '450px' }}>
                <h2 className='text-center text-info'>RegistrationForm</h2>
                <div className='col' >
                    <form >
                        <div className = ' m-1'>
                            <label  >First Name : </label>
                            <input name='fname' style={{float:'right'}} value={user.fname} onChange={(e) => {
                                setUser({ ...user, fname: e.target.value })
                            }} />

                        </div>
                        <div className = ' m-1'>
                            <label  >Last Name :</label>
                            <input name='lname' style={{float:'right'}}  value={user.lname} onChange={(e) => {
                                setUser({ ...user, lname: e.target.value })
                            }} />
                        </div>
                        <div className = ' m-1'>
                            <label  >Email:</label>
                            <input name='email'style={{float:'right'}}  value={user.email} onChange={(e) => {
                                setUser({ ...user, email: e.target.value })
                            }} />
                        </div>
                        <div className = ' m-1'>
                            <label  >address : </label>
                            <input name='address'  style={{float:'right'}} value={user.address} onChange={(e) => {
                                setUser({ ...user, address: e.target.value })
                            }} />
                        </div>
                        <div className = ' m-1'>
                            <label  >About You :</label>
                            <textarea  style={{ width: '150px', height: '35px' }}></textarea>
                        </div>
                        <div className = ' m-1'>
                           <label className = 'float-left' >Course</label>
                            <input list='courses'style={{float:'right'}}   onChange={(e) => {
                                setUser({ ...user, course: e.target.value })
                            }} />
                            <datalist id='courses' >
                                <option value='React Js'></option>
                                <option value='Java'></option>
                                <option value='Python'></option>
                                <option value='Java Script'></option>
                            </datalist>
                        </div>
                        <div className = ' m-1'>
                            <label  >Gender</label>
                            
                            <input type='radio' value='Male' name='gender' onChange={(e) => {
                                setUser({ ...user, gender: e.target.value })
                            }} /><label  >Male</label>&nbsp;&nbsp;
                            <input type='radio' value='Female' name='gender' onChange={(e) => {
                                setUser({ ...user, gender: e.target.value })
                            }} /><label  >Female</label>
                            
                        </div>
                    </form>
                    <button className='btn btn-success' onClick={()=>{console.log(user)}}>Submit</button>
                    <input  type = 'reset' value ='Reset' className='btn btn-danger' style={{float:'right'}}/>
                </div>
            </div>
        </div>

    )
}
