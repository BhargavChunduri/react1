import React, { useState } from 'react';

export default function State() {
//   let count = 0;
  
    let [count, setCount]= useState(0)
        const  increment = ()=>{
        setCount(count+1);
    }
    return (
        <>
            <div>Count  : {count}</div>
            {/* <h3 id='h'></h3> */}
            {count%2 === 0 ? <h3 id='h'>This is Heading</h3>:''}
            {/* {count%2 === 0 ? document.getElementById('h').innerText = 'This is Heading':document.getElementById('h').innerHTML = null} */}
            <button onClick={increment}>Show/Hide</button>
        </>

  )
}
