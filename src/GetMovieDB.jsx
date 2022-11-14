import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FilmPage from "./Components/FilmPage";
import config from "./config.json";
import Button from "@mui/material/Button";
import "./GetMovieDB.css";
// import "./Components/FilmPage.css";

export default function GetMovieDB() {
    const [result, setResult] = useState();
    const key = process.env.REACT_APP_TMDB_API;
    const [number, setNumber] = useState();
    const { images } = config;
    const { base_url } = images;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${number}?api_key=${key}`)
            .then((response) => response.json())
            .then((data) => {
                verifystatusCode(data);
                setResult(data);
            });
        verifystatusCode(result);
    }, [number]);

    function getNumber() {
        //Nummer zwischen 10000 und 1
        setNumber(Math.floor(Math.random() * 1000 + 1));
    }

    function verifystatusCode(data) {
        if (data) {
            if (data.status_code && data.status_code === 34) {
                const num = Math.floor(Math.random() * 10);
                const filmNum = [560, 780, 9045, 8998, 4730, 3924, 6124, 8773, 25449, 31975];
                setNumber(filmNum[num]);
            }
        }
    }

    return (
        <>
            {/* <button onClick={getNumber}>Random Movie</button> */}
            <div className="Button-Container">
                <Button
                    className="randomButton"
                    variant="contained"
                    onClick={getNumber}
                >
                    Random Movie
                </Button>
            </div>

            {number ? (
                <FilmPage data={result}></FilmPage>
            ) : (
                <div className="mainPage">
                    <h1>Zufälligen film gefällig</h1>
                </div>
            )}
        </>
    );
}
