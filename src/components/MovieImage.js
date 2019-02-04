import React  from 'react';
import styled from 'styled-components';

const MovieImage = ({ url }) => <Image src={`https://image.tmdb.org/t/p/w500/${url}`} alt="movie poster"/>

const Image = styled.img`
  width  : 94%;
  margin : 1%;
`;

export default MovieImage;
