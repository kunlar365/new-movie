import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MY_API_KEY } from "../global";
import { ORIGINAL_IMAGE_URL } from "../global";
import Similarcard from '../components/Similarcard';
import SwiperCore, { Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Actorcard from "../components/ActorCard"

const SINGLE_MOVIE_API = `https://api.themoviedb.org/3/movie/`;
const API_PARAMS = `?api_key=${MY_API_KEY}&language=en-US`;
const IMAGE_URL = `https://image.tmdb.org/t/p/w500`;

const ViewMovie = () => {

    const [actorsList, setActorsList] = useState([]);
    const [similar, setSimilar] =useState([]);
    const [error, setError] = useState([]);

    const [movieInfo, setMovieInfo] = useState({});

    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        fetch(SINGLE_MOVIE_API + id + API_PARAMS).then( res => res.json()).then(data => {
            setMovieInfo(data);
            console.log(data);
        });
        fetch(SINGLE_MOVIE_API + id + '/credits' + API_PARAMS)
        .then((res) => {
            if(!res.ok) {
                throw Error("Serverdan ma'lumot olishda xatolik!");
            }
            return res.json();
        })
        .then((data) => {
            setActorsList(data.cast);
            console.log(data)
        })
        fetch(SINGLE_MOVIE_API + id + './similar' + API_PARAMS)
        .then((res) => {
            if(!res.ok) {
                throw Error("Serverdan ma'lumot olishda xatolik!");
            }
            return res.json();
        })
        .then((data) => {
            setSimilar(data.results);
            console.log(data);
        })
        .catch((err) => {
            console.log(err.message);
            setError(err.message);
        });

    }, [id]);

    // const actorArr = actorsList.map((el, i) => <Actorcard key={i} actorsobj={el} />)

    const mappedSimilar = similar.map((similar,index) => (
        <Similarcard
         key={index} similar={similar}
        />
    ))

    SwiperCore.use([Autoplay]);

    return (
        <div className="view_movie_page" style={{ backgroundImage: `url(${ORIGINAL_IMAGE_URL + movieInfo.backdrop_path})`}}>
            <h2>View Movie Page : {movieInfo.title}</h2>
            <div className="container">
                <div className="about-movie">
                    <img src={IMAGE_URL + movieInfo.poster_path} alt=""/>
                    <div className="movie-texts">
                        <span className="moive-release_date"> {movieInfo.release_date} </span>
                        <span className="moive-runtime">Runtime: {movieInfo.runtime} minut </span>
                        <h4 className="film-budget">Budget: {movieInfo.budget}</h4>
                        <h1>{movieInfo.original_title}</h1>
                        <p className="movie-tagline">{movieInfo.tagline}</p>
                        <h3>{movieInfo.overview}</h3>
                        <span>Popularity: {movieInfo.popularity}</span> <br/>
                        <a href={movieInfo.homepage}>View Movie</a>
                    </div>
                </div>
            <h2>Actors</h2>
            <div className="actors">
                <div className="container">
                <Swiper modules={[Autoplay]} spaceBetween={10} slidesPerView={4}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                >
                    {actorsList.map( el => ( <SwiperSlide key={el.id}> <Actorcard actor={el}/> </SwiperSlide>))}
                </Swiper>
                </div>
            </div>
            <h2 className='similars'>Similar movies</h2>
            <div className='similarcard'>
                {mappedSimilar}
            </div>
            </div> 
        </div>
    )
}

export default ViewMovie;