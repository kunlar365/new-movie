import React from 'react';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Movie from './Movie';

import { MY_API_KEY } from '../global';
import SwiperCore, { Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

const Movielist = ({type, title}) => {

    SwiperCore.use([Autoplay])

    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=${MY_API_KEY}`).then( res => res.json())
        .then( data => {
            setMoviesList(data.results);
        })
    }, []);

    return (
        <div>
            <div className="see_all">
               <h2>{title}</h2>
               <Link className="all-movies" to="/catalog">All</Link>

            </div>
            
            <Swiper
                modules={[Autoplay]}   
                spaceBetween={30}
                slidesPerView={4}
                autoplay={{
                    delay: 2000, 
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
            >
                {moviesList.map( el => ( <SwiperSlide key={el.id}><Movie movieObj={el}   /></SwiperSlide>))}
            </Swiper>
        </div>
    )
}

export default Movielist;
