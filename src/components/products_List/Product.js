import React from 'react'
import { createSearchParams, Link, useNavigate } from 'react-router-dom';

export default function Product(props) {
  const { image, price, title, rating, id } = props.obj;
  const navigate = useNavigate()
  const navigateHandler = (title,price)=>{
    navigate({
      pathname :'/productdetail',
      search :`?${createSearchParams({title,price})}`,
    })

  }
  return (
    <div className='col-sm-3' >
      <div className="card" style={{ width: '18rem' }}>
        <img src={image} className="card-img-top" style={{ height: '250px', width: '250px', align: 'center' }} alt="abc" />
        <div className="card-body text-center">
          <h5 className="card-title text-success"> ${price}</h5>
          <p className="card-text">{title}</p>
          <span className='text-warning float-start'>Rating:{rating.rate}</span>
          <span className='text-danger float-end  '>Count:{rating.count}</span><br /><br/>
          <button className='btn btn-info offset-1' ><Link to={`/productDetails/${id}`} style={{ color: 'white', textDecoration: 'none' }}>View-1</Link></button>
          <button onClick={()=>navigateHandler(title,price)} className='btn btn-info offset-1'  style={{ color: 'white', textDecoration: 'none' }}> view-2</button>
        </div>
      </div>
    </div>
  )
}
