import React,{useEffect,useState} from 'react'
import './liked.css'
import config from '../config.json'

export default function LikedPage() {
  const[movies,setMovies]=useState()
useEffect(()=>{
  const response = localStorage.getItem('savedMovies');
  const parsed = JSON.parse(response)
  setMovies(parsed);
},[])
  const baseUrl = config.images.base_url
  return (
    <>
    {movies && <div className='cardContainer'>
 {movies.map((ele,i) => (
      <div className='MovieCard'>
      <img src={baseUrl+"w92"+ele.poster_path} alt=""/>
      <div className='description'>
        <h4>{ele.title}</h4>
        <p>{ele.tagline ? ele.tagline : ele.overview.slice(0,255)}</p>
        <a href=""></a>
        </div>
      </div>
    ))}
</div>}

    </>
  )
}
