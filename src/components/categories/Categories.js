import React from 'react'
import "./categories.css"
// import mobile from '../../../public/images/mobile.jpg'
import  categories from  "./categories.json"
import Category from './Category'

export default function Categories() {
  return (
    <div className='container' >
        <div className='row'>
            
            {categories.map((val,ind) => {
                return <Category obj = {val} key={ind}/>
            })}
           
        </div>
    </div>
  )
}
