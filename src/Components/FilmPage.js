import React from "react";
import config from "../config.json";

export default function filmPage({ data }) {
    const { images } = config;
    const { base_url } = images;
    const { logo_sizes } = images;
    console.log("0", logo_sizes[5]);
    console.log(base_url);
    let title, img, homepageUrl, overview, release_date;
    if (data) {
        console.log("result", data);
        title = data.original_title;
        console.log(base_url + data.backdrop_path);
        img = `${base_url}${logo_sizes[5]}${data.backdrop_path}`;
        // img = `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`;

        overview = data.overview;
        homepageUrl = data.homepage;
        release_date = data.release_date;
        console.log("homepageUrl", homepageUrl);
    }
    return (
        <div>
            <p>filmPage </p>
            <p> {title}</p>
            <p>release date : {release_date}</p>
            <img src={img} alt={title} />
            <a href={homepageUrl}> Hier Klicken</a>
            <p>{overview}</p>
        </div>
    );
}
