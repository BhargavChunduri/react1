import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function ProductDetail() {
    const [searchParams] = useSearchParams();
    const [param,setParam] = useState({})
    useEffect(() => {
        const allParam = Object.fromEntries([...searchParams]);
        setParam(allParam)
    }, [searchParams])
    return (<>
        <h2>These Are Details of your product</h2>
        <div className='container'>
                <div className='row'>
                    <div className="card col-3 offset-5" style={{ width: '18rem' }}>
                        
                        <div className="card-body text-center">
                            <h5 className="card-title text-success"> ${param.price}</h5>
                            <p className="card-text">{param.title}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
    </>
    )
}
