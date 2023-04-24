import {React,useEffect, useState} from 'react'
import './Banner.css'
import instance from './instance'
import requests from './request'

function Banner() {
    const [movie, setMovie]=useState({})

    const fetchData=async()=>{
       const response= await instance.get(requests.fetchHorrorMovies)
       setMovie(response.data.results[
        Math.floor(Math.random()*response.data.results.length)
       ]);
      
    }
    useEffect(()=>{
        fetchData()
       },[])

  return (
    <div>
      <h1>Banner</h1>
    </div>
  )
}

export default Banner
