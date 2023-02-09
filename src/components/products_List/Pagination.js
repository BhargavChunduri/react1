import React from 'react'

const Pagination = ({totalPosts , postsPerPage , setCurrentPage}) => {
    const pages =[];
    for(let i = 1; i<= Math.ceil(totalPosts/postsPerPage);i++){
        pages.push(i);
    }
    // console.log(totalPosts);
    // console.log(postsPerPage);

    return (
        pages.map((page,ind)=>{
            return <button className='btn btn-primary' key={ind} onClick={()=>setCurrentPage(page)}>{page}</button>
        })
  )
}

export default Pagination