import React               from 'react';
import styled              from 'styled-components';

import MovieImage           from './MovieImage';
import MovieSpec            from './MovieSpec';

const MovieDetails = ({
  movie: {
    poster_path,
    title,
    production_countries,
    release_date,
    genres,
    vote_average,
    language,
    budget,
    overview,
  },
}) => (
  <Wrapper>
    <MovieImageWrapper>
      <MovieImage url={poster_path} />
    </MovieImageWrapper>
    <SpecWrapper>
      <MovieSpec
        title={title}
        countries={production_countries}
        release={release_date}
        genres={genres}
        voteAverage={vote_average}
        language={language}
        budget={budget}
      />
      <p>
        {overview}
      </p>
    </SpecWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  padding        : 15px;
  display        : flex;
  flex-direction : row;
`;

const SpecWrapper = styled.div`
  display        : flex;
  flex-direction : column;
`;

const MovieImageWrapper = styled.div`
  width : 40%;
`;

export default MovieDetails;
