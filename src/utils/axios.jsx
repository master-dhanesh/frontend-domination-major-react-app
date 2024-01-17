import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjM2NjdkMTIzOTg3MWZjNGI2ZWVlZjhkMGQ2ZGVmOCIsInN1YiI6IjYxZmQyNWFjZWVlMTg2MDA5MTFkOTZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uPjuX67gktlPrFCrY6ZuR7Xm5bZESAcyqvSu8swmOLI",
    },
});

export default instance;
