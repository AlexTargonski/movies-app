import React  from 'react';
import styled from 'styled-components';

const MovieSpec = ({
  title,
  countries,
  release,
  genres,
  voteAverage,
  language,
  budget,
}) => (
  <Wrapper>
    <h1>{title}</h1>
    <h3>
      Country:
      {countries.map(c => `${c.name} `)}
    </h3>
    <h3>
      Language: {language}
    </h3>
    <h3>
      Release:
      {release}
    </h3>
    <h3>
      Budget: ${new Intl.NumberFormat().format(budget)}
    </h3>
    <h3>
      Genres:
      {genres.map(g => `${g.name} `)}
    </h3>
    <h3>
      Average vote:
      {voteAverage}
    </h3>
  </Wrapper>
);

const Wrapper = styled.div`
  padding : 15px;
`;

export default MovieSpec;
