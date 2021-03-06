import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { BY_GENRES } from '../global';
import Movie from '../components/Movie';
import usePrevious from '../hooks';

const Row = styled.div `
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  background-color: #FFF;
`;

const MoviesGrid = (props) => {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const prevGenre = usePrevious(props.genre);

  const loadMore = () => {
    setPage(page + 1);
    console.log(page);
  };

  useEffect(() => {
    let list;
    if(prevGenre != props.genre) {
      list = []
    } else {
      list = movies;
    }
    fetch( BY_GENRES + props.genre + '&page=' + page ).then(res=> res.json()).then(data => {
      setMovies(list.concat(data.results));
      setTotalPage(data.total_pages);
    });
  }, [props.genre, page]);

  return (
    <div className="col">
      <h2 className="catalog-title"> Movies count: {movies.length} </h2>
      <Row>
        {movies.map( (el, i) => <Movie movieObj={el} key={i} /> )}
      </Row>
      {
        page < totalPage ? <button type="button" onClick={loadMore}>Load more</button> : ''
      }
    </div>
  );
};

export default MoviesGrid;