import React, { Component } from 'react';
import styled               from 'styled-components';
import { withRouter }       from 'react-router';
import { Link }             from 'react-router-dom';

import MovieImage           from '../components/MovieImage';
import MovieSpec            from '../components/MovieSpec';

class MovieDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie  : {
        details : {},
        loaded  : false,
      },
      recommended : {
        data    : {},
        loaded  : false,
      }
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TOKEN}&language=en-US`)
      .then(response => response.json())
      .then(result => this.setState({ movie : { details : result, loaded : true }}))
      .catch(error => console.log(error));

    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TOKEN}&language=en-US&page=1`)
      .then(response => response.json())
      .then(result => this.setState({ recommended : { data : result, loaded : true }}))
      .catch(error => console.log(error));
  }

  render() {
    const { movie, recommended } = this.state

    return (
      <>
        <DetailsWrapper>
          {
            movie.loaded?
            <>
              <MovieImageWrapper>
                <MovieImage url={movie.details.poster_path} />
              </MovieImageWrapper>
              <Details>
                <MovieSpec
                  title={movie.details.original_title}
                  countries={movie.details.production_countries}
                  release={movie.details.release_date}
                  genres={movie.details.genres}
                  voteAverage={movie.details.vote_average}
                  language={movie.details.original_language}
                  budget={movie.details.budget}
                />
                <p>
                  {movie.details.overview}
                </p>
              </Details>
            </>
            :
            <p>loading...</p>
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

const MovieImageWrapper = styled.div`
  width : 40%;
`;

const Details = styled.div`
  display        : flex;
  flex-direction : column;
  width          : 50%;
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

export default withRouter(MovieDetailsPage);
