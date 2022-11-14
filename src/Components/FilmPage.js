import React, { useEffect, useState } from "react";
import config from "../config.json";
import "./FilmPage.css";

import Button from "@mui/material/Button";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import LanguageIcon from "@mui/icons-material/Language";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Stack from "@mui/material/Stack";
import LikedPage from "./LikedPage";

export default function FilmPage({ data }) {
    const { images } = config;
    const { base_url } = images;
    const { logo_sizes } = images;

    let title,
        img,
        mainImg,
        homepageUrl,
        overview,
        release_date,
        runtime,
        genres,
        original_language;

    if (data) {
        // console.log("data", data);
        title = data.original_title;

        mainImg = `${base_url}${logo_sizes[5]}${data.backdrop_path}`;
        // img = `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`;
        img = `${base_url}${logo_sizes[3]}${data.poster_path}`;

        overview = data.overview;
        homepageUrl = data.homepage;
        release_date = data.release_date;
        original_language = data.original_language;
        runtime = data.runtime;
        // genres = data.genres.map((genre) => return( )genre.name);
    }

    //speichert das object in einem array behält die alten
    const [save, setSave] = useState([]);
    console.log("save b", save);
    function saveMovie() {
        // console.log("data von saveFunction", data);

        // if (save != null) {
        //     setSave((previous) => [data, ...previous]);
        // } else {
        //     setSave(save);
        // }
        localStorage.setItem("savedMovies", JSON.stringify(save));
        if (save === null) {
            setSave([data]);
        }
        if (save !== null) {
            console.log("save2", save);
            setSave((previous) => [data, ...previous]);
            localStorage.setItem("savedMovies", JSON.stringify(save));
        }
    }
    useEffect(() => {
        const parsed = JSON.parse(localStorage.getItem("savedMovies"));
        if (parsed) {
            setSave(parsed);
        }
    }, []);

    return (
        <div className="filmPage-Container">
            <div className="mainImage-Container">
                <img src={mainImg} alt={title} />
            </div>
            <article className="film-content">
                <div className="filmName-Container">
                    <h1>{title} </h1>
                    <div className="button-Container">
                        <Stack direction="row" spacing={2}>
                            <Button
                                onClick={saveMovie}
                                variant="contained"
                                startIcon={<BookmarkBorderIcon />}
                            >
                                Save
                            </Button>
                            <Button
                                variant="contained"
                                startIcon={<OndemandVideoIcon />}
                            >
                                <a href={homepageUrl}> Watch</a>
                            </Button>
                            <Button
                                variant="contained"
                                startIcon={<ShareIcon />}
                            >
                                Share
                            </Button>
                        </Stack>
                    </div>
                </div>
                <div className="info-Container">
                    <div className="generalInfo1-Container">
                        <div className="release_date">
                            <CalendarMonthIcon />
                            <span> {release_date}</span>
                        </div>
                        <div className="genres">
                            <span> </span>
                        </div>
                    </div>
                    <div className="generalInfo2-Container">
                        <div className="language">
                            <LanguageIcon />
                            <span>{original_language} </span>
                        </div>
                        <div className="runtime">
                            <AccessTimeIcon />
                            <span> {runtime} Min</span>
                        </div>
                    </div>
                </div>
                <div className="filmOverview-Container">
                    <p>{overview}</p>
                    <img src={img} alt={title} />
                </div>
                <div></div>
            </article>
            {/* <button onClick={saveMovie}>Save</button> */}
        </div>
    );
}
