import React, { useState, useEffect } from "react";

export default function GetMovieDB() {
    const [result, setResult] = useState();

    const key = process.env.REACT_APP_TMDB_API;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/550?api_key=${key}`)
            .then((response) => response.json())
            .then((data) => setResult(data));
    }, []);
    if (result) {
        console.log(result);
    }

    return <div>getMovieDB</div>;
}
