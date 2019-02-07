import React, { Component } from 'react';
import styled               from 'styled-components';
import { withRouter }       from 'react-router';

import MovieImage           from '../components/MovieImage';
import MovieSpec            from '../components/MovieSpec';

class MovieDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie  : {},
      loaded : false,
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TOKEN}&language=en-US`)
      .then(response => response.json())
      .then(result => this.setState({ movie : result, loaded : true }))
      .catch(error => console.log(error));
  }

  render() {
    const { movie, loaded } = this.state

    return (
      <Wrapper>
        {
          loaded?
          <>
            <MovieImageWrapper>
              <MovieImage url={movie.poster_path} />
            </MovieImageWrapper>
            <Details>
              <MovieSpec
                title={movie.original_title}
                countries={movie.production_countries}
                release={movie.release_date}
                genres={movie.genres}
                voteAverage={movie.vote_average}
                language={movie.original_language}
                budget={movie.budget}
              />
              <p>
                {movie.overview}
              </p>
            </Details>
          </>
          :
          <p>loading...</p>
        }
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
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

export default withRouter(MovieDetailsPage);
