import React from 'react'

export default function Category(props) {
  const {img,name} = props.obj;
  // console.log(Objs);
  return (
   
    <div className='col'>
           <div className='text-center category'>
             <div>
              <img src={img}  alt="abc"/>
            </div>
            <div>
              <span>{name}</span>
            </div>
        
           </div>
    </div>    
  )
}
