import axios from "axios";

/** base url to make requests to the the movie database */

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

/* We can only default export once

if we want to export many then we can destructure it like so: 

export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

and drop the export default line

in this case the name of whever we export this will be really important.abs

but in our case the name doesn't matter

*/
