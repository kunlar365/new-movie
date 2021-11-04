import GenresList from "../components/GenresList";
import MoviesGrid from "../components/MoviesGrid";
import styled from "styled-components";
import { useParams } from 'react-router';


const PageContent = styled.section `
  margin-top: 97px;
  padding: 70px 0;
`;

const Wrapper = styled.div `
  background-color: #16151A;
  display: flex;
  justify-content: space-between;
`;

const Catalog = () => {
    const {genreid} = useParams();
    return (
    <PageContent className="bg-img">
      <div className="container">
        <Wrapper>
          <GenresList> </GenresList>
          <MoviesGrid genre={genreid} />
        </Wrapper>
      </div>
    </PageContent>
  );
}

export default Catalog;