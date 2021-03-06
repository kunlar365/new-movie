import react from "react";
import { Link } from "react-router-dom";


const Similar=(props)=>{
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
    return(
        <div className='Card'>
            <img className='similarMovie' src={IMAGE_URL + props.similar.poster_path}/>
            <p className='similar-title'>{props.similar.title}</p>
            <Link to={`/movie/${props.similar.id}`}>View this movie</Link>
        </div>
    )
}

export default Similar;