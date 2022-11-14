import React, { useState, useEffect } from "react";

export default function GetMovieDB() {
    const [result, setResult] = useState();

    const key = process.env.REACT_APP_TMDB_API;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${number}?api_key=${key}`)
            .then((response) => response.json())
            .then((data) => setResult(data));
    }, []);
    if (result) {
        console.log(result);
    }

    const [number,setNumber]= useState()
function getNumber(){
  //Nummer zwischen 10000 und 1
  setNumber(Math.floor(Math.random() * 10000 +1))
}
    return (
      <>
      <button onClick={getNumber}>Random Movie</button>
      </>
    )

}
