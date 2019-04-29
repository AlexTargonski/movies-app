import React, { Component } from 'react';
import styled               from 'styled-components';
import { Link }             from 'react-router-dom';
import { connect }          from 'react-redux';

import MovieImage           from '../components/MovieImage';
import { getMovies }        from '../actions/movies';

class HomePage extends Component {

  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    const { movies } = this.props.moviesList;

    return (
      <Wrapper>
        {
          movies?
          movies.map((movie, index) =>
            <Item key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <MovieImage url={movie.poster_path} />
                <h2>{movie.original_title}</h2>
              </Link>
            </Item>
          )
          :
          <p>Loading...</p>
        }
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display   : flex;
  flex-wrap : wrap;
  padding   : 5%;
`;

const Item = styled.div`
  flex   : 1 0 21%;
  margin : 5px;
`;

const mapStateToProps = state => ({
  moviesList : state.movies,
})

const mapDispatchToProps = dispatch => ({
  fetchMovies : () => {
    dispatch(getMovies());
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
