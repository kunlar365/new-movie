import { Link } from "react-router-dom";

const IMAGE_URL = `https://image.tmdb.org/t/p/w500`;


const Movie = ({ movieObj }) => {

    const url = `/movie/${movieObj.id}`;
    return (
        <div className="movie">
            <img src={ IMAGE_URL + movieObj.poster_path} alt={movieObj.title} />
            <h1>{movieObj.title ? movieObj.title : movieObj.name}</h1>
            <Link to={url}>View this movie</Link>
        </div>
    );
};

export default Movie;