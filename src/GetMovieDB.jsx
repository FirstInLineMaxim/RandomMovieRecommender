import React from 'react'

export default function GetMovieDB() {
    fetch('https://api.themoviedb.org/3/movie/550?api_key=88d397b04b1263f1a88493c662a83f13').then(response => response.json()).then(data=> console.log(data))
  return (
    <div>getMovieDB</div>
  )
}
