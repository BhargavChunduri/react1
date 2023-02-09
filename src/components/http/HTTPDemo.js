import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function HTTPDemo() {

    const [products, setProducts] = useState([]);


    // const fetchProducts = async function () {
    //     const productsData = await fetch("https://fakestoreapi.com/products");
    //     //console.log(await productsData.json);
    //     const finalData = await productsData.json();
    //     setProducts(finalData);
    //     console.log(finalData);
    // }
    const fetchProducts = ()=>{
        fetch("https://fakestoreapi.com/products").then(response=>response.json()).then(finalData=>setProducts(finalData))
    
    }
    useEffect(() => {
        fetchProducts();
    } ,[])
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {products.map((product, ind) => {
                        return (
                            <div className='col-sm-3' key={ind}>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={product.image} className="card-img-top" style={{ height: '250px', width: '250px', align: 'center' }} alt="abc" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-success"> ${product.price}</h5>
                                        <p className="card-text">{product.title}</p>
                                        <span className='text-warning float-start'>Rating:{product.rating.rate}</span>
                                        <span className='text-danger float-end  '>Count:{product.rating.count}</span>
                                    </div>
                                </div>
                            </div>
                        )

                    })}
                </div>
            </div>
        </>
    )
}
