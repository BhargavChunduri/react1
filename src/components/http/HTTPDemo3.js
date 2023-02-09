import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export default function HTTPDemo3() {

    const [moviesData, setMoviesData] = useState([])
    // const fetchMovies = () => {
    //     const url = "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
    //     axios.get(url).then(response => {
    //         console.log(response.data);
    //         setMoviesData(response.data);
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // }
    const fetchMovies = async ()=>{
        const url =  "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
        const mvedata = await axios.get(url);
        setMoviesData(mvedata.data);
        console.log(mvedata.data);
    }
    useEffect(() => {
        fetchMovies()
    }, [])
    return (
        <>
            <div className='container my-5'>
                <div className='row'>
        {console.log(moviesData)}
                    
                    {moviesData.map((obj,ind)=>{
                        return (
                            <div className='col-3' key={ind}>
                                        {}
                                <div className='card'>
                                <img src={obj.Poster} className="card-img-center" style={{ height: '250px', width: '250px', align: 'center' }} alt="abc" />
                                <div className="card-body text-center">
                                <h5 className="card-title text-success"> {obj.Title}</h5>
                                <h5 className="text-warning float-start"> {obj.Year}</h5>
                                <h5 className="text-danger float-end"> {obj.Runtime}</h5>
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
