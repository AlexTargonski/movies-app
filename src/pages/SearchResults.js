import React       from 'react';
import styled      from 'styled-components';
import { Link }    from 'react-router-dom';
import { connect } from 'react-redux';

import MovieImage  from '../components/MovieImage';

const SearchResults = ({ searchResults : { search } }) => (
  <SearchResults.Wrapper>
    {
      search &&
      search.map((movie, index) =>
        <SearchResults.Item key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <MovieImage url={movie.poster_path} />
            <h2>{movie.original_title}</h2>
          </Link>
        </SearchResults.Item>
      )
    }
  </SearchResults.Wrapper>
);

SearchResults.Wrapper = styled.div`
  display   : flex;
  flex-wrap : wrap;
  padding   : 5%;
`;

SearchResults.Item = styled.div`
  flex   : 1 0 21%;
  margin : 5px;
`;

const mapStateToProps = state => ({
  searchResults : state.search,
})

export default connect(mapStateToProps, null)(SearchResults);
