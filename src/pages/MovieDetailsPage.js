import React, { Component } from 'react';
import styled               from 'styled-components';
import { withRouter }       from 'react-router';
import { Link }             from 'react-router-dom';
import { connect }          from 'react-redux';

import MovieImage           from '../components/MovieImage';
import MovieDetails         from '../components/MovieDetails';
import { getMovie }         from '../actions/movie';

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

    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TOKEN}&language=en-US&page=1`)
      .then(response => response.json())
      .then(result => this.setState({ recommended : { data : result, loaded : true }}))
      .catch(error => console.log(error));
  }

  render() {
    const { recommended } = this.state;
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
            recommended.loaded?
            <RecommendedMovies>
              {
                recommended.data.results.map(movie =>
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
  movieDetails : state.movie,
})

const mapDispatchToProps = dispatch => ({
  fetchMovie : (id) => {
    dispatch(getMovie(id));
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MovieDetailsPage));
