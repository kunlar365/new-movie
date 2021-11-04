import Movielist from '../components/Movielist';
import { useEffect, useState } from "react";
import { MY_API_KEY } from '../global';
import SliderMovie from '../components/SliderMovie'
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${MY_API_KEY}&language=en-US&include_adult=false`
const TRENDING_MOVIES_API = `https://api.themoviedb.org/3/trending/all/day?api_key=${MY_API_KEY}`


const Home = () => {
    

  const [movieList, setMovieList] = useState([])

  useEffect(()=>{
    setTimeout(() => {
        fetch(TRENDING_MOVIES_API).then( res => res.json()).then(data => {
         setMovieList(data.results);
         console.log(data);
        });
    },2000);
  
}, []);

    // const handleSearch = (e) => {
    //     if(e.target.value.length > 2) {
    //         console.log(e.target.value);
    //         fetch(SEARCH_API + `&query=${e.target.value}`).then(res => res.json()).then( data => {
    //             setMoviesList(data.results);
    //         })
    //     }
    // };

    return (

        <div className="page-content">
          {/* <input type="text" placeholder="Search" onChange={handleSearch} /> */}
            {/* <div className="movies"> */}
            <SliderMovie/>
            <div>
            <Movielist type='upcoming' title='Upcoming movies'/>
            <Movielist type='top_rated' title='Top movies'/>
            <Movielist type='popular' title='Popular movies'/>
            </div>   
            {/* </div> */}
      </div>
    );
  }
  
export default Home;
  