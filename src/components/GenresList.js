
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import {MY_API_KEY} from '../global'

const GenresList=()=>{

    const [genresList, setGenresLIst] = useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${MY_API_KEY}`).then(res => res.json())
          .then(data => {
            setGenresLIst(data.genres);
          });
      },[]);
    return(
        genresList.map((el,index)=>{
          return <NavLink className='genres' activeClassName="active-genre" to={`/catalog/${el.id}`} key={index}>{el.name}</NavLink>
        })
    )
}

export default GenresList;
