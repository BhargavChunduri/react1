import React from 'react'
// import{product} from './Products_Data'
import Product from './Product'
export default function ProductsList({currentPosts}) {
  return (
    <>
    <div className='container'>
    <div className='row'>
    {currentPosts.map((value , ind)=> {
       return <Product obj = {value} key={ind}/>
    })}
      
    </div>
    </div>
    
    </>
  )
}

