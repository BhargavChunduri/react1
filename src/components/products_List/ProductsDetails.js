import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductsDetails() {
    const [details, setDetails] = useState({})
    const { id } = useParams();
    const fetchDetails = async () => {
        const details = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log(details.data);
        setDetails(details.data);
    }

    useEffect(() => {
        fetchDetails()
    }, [id])
    return (
        <>
            <h2>These Are Details of Product-{id}</h2>
            <div className='container'>
                <div className='row'>
                    <div className="card col-3 offset-5" style={{ width: '18rem' }}>
                        <img src={details.image} className="card-img-top" style={{ height: '250px', width: '250px', align: 'center' }} alt="abc" />
                        <div className="card-body text-center">
                            <h5 className="card-title text-success"> ${details.price}</h5>
                            <p className="card-text">{details.title}</p>
                            <span className='text-warning float-start'>Rating:{details?.rating?.rate}</span>
                            <span className='text-danger float-end  '>Count:{details?.rating?.count}</span><br />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
