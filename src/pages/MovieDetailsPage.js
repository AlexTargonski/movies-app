import React, { Component }     from 'react';
import styled                   from 'styled-components';
import { withRouter }           from 'react-router';
import { Link }                 from 'react-router-dom';
import { connect }              from 'react-redux';

import MovieImage               from '../components/MovieImage';
import MovieDetails             from '../components/MovieDetails';
import { getMovie }             from '../actions/movie';
import { getRecommendedMovies } from '../actions/movies';

class MovieDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommended : {
        data    : {},
        loaded  : false,
      }
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchMovie(id);
    this.props.fetchRecommendedMovies(id);
  }

  render() {
    const { movies } = this.props.recommendedMovies;
    const { movie } = this.props.movieDetails;

    return (
      <>
        <DetailsWrapper>
          {
            movie ?
            <MovieDetails
              movie={movie}
            />
            :
            <p>Loading</p>
          }
        </DetailsWrapper>
        <RecommendedMoviesWrapper>
          <h2>Recommended Movies :</h2>
          {
            movies?
            <RecommendedMovies>
              {
                movies.map(movie =>
                  <RecommendedItem key={movie.id}>
                    <Link to={`/${movie.id}`}>
                      <MovieImage url={movie.poster_path} />
                    </Link>
                  </RecommendedItem>
                )
              }
            </RecommendedMovies>
            :
            <p>loading...</p>
          }
        </RecommendedMoviesWrapper>
      </>
    );
  }
}

const DetailsWrapper = styled.div`
  display        : flex;
  flex-direction : row;
`;

const RecommendedMoviesWrapper = styled.div`
  display        : flex;
  flex-direction : column;
  padding        : 20px;
`;

const RecommendedMovies = styled.div`
  display   : flex;
  flex-wrap : wrap;
  width     : 100%;
`;

const RecommendedItem = styled.div`
  flex : 1 0 21%;
`;

const mapStateToProps = state => ({
  movieDetails      : state.movie,
  recommendedMovies : state.movies,
})

const mapDispatchToProps = dispatch => ({
  fetchMovie            : id => {
    dispatch(getMovie(id));
  },

  fetchRecommendedMovies : id => {
    dispatch(getRecommendedMovies(id));
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MovieDetailsPage));
