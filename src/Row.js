import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setMovies] = useState([]);

  //a snippet of code which runs based on a specific condition
  useEffect(() => {
    // if [], run once when the row loads, and dont run again
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      // console.log(request);
      // console.table(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);
  //why we use fetchUrl as a dependancy:
  //we are using a variable that we are passing from outside the block,
  //we have to tell Useffect that we are using a variable outside the block ,
  //in this way we telling Useeffect that if something changes it has to re-fire the code
  return (
    <div className="row">
      <h2>{props.title}</h2>

      <div className="row__posters">
        {}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${props.isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Row;
