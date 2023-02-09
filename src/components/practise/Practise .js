import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

export default function Practise () {
  
//     const [a,setA] = useState(10);
//     const [b,setB] = useState(20);
//     const [c,setC] = useState(30);
//     useEffect(()=>{
//         console.log("Use Effect Called...")
//     } , [a,b])
//     return (
//    <>
//     <div>
//        A is {a} <br/>
//        B is {b} <br/>
//        C is {c} <br/>
//     </div>
//     <button onClick = {()=>setA(15)} className='ms-1'>A</button>
//     <button onClick = {()=>setB(25)} className='ms-1'>B</button>
//     <button onClick = {()=>setC(35)} className='ms-1'>C</button>
   
//    </>
//   )
// }
// const [count , setCount] = useState(10);
// const myRef = useRef();
// useEffect(()=>{
//     myRef.val = count;
// })
// return (
//     <>
//         Now :{count} before:{myRef.val }
//         <br/> <br/><button className='btn btn-info' onClick={()=>{setCount(count+1)}}>Increment</button>
//     </>
// )
// }
const inputRef1 = useRef();
const inputRef2 = useRef();
const add =()=>{
    //console.log(+inputRef1.current.value);
    let val1 = +inputRef1.current.value;
    let val2 = +inputRef2.current.value;
    console.log("Add is" , (val1+val2));
    //console.log(+inputRef1.current.value);
    //console.log(+inputRef1.current);
}
const changeHandler = (e)=>{
    if(e.target.name === 'inputRef1'){
        console.log(+inputRef1.current.value);
        console.log(+inputRef1.current);
    }else{
        console.log(+inputRef2.current.value);
        console.log(+inputRef2.current);
    }
}
return (
    <>
        <input ref = {inputRef1} name = 'inputRef1' onChange={changeHandler}/>
        <input ref = {inputRef2} name = 'inputRef2' onChange={changeHandler}/>
        <button onClick={add} >ADD</button>
    </>
)
}