import React from 'react'

export default function GetMovieDB() {
    const key = process.env.REACT_APP_TMDB_API
    fetch(`https://api.themoviedb.org/3/movie/550?api_key=${key}`).then(response => response.json()).then(data=> console.log(data))
  return (
    <div>getMovieDB</div>
  )
}
