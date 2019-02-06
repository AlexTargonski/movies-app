import React, { Component } from 'react';
import styled               from 'styled-components';
import { withRouter }       from 'react-router';

import MovieImage           from '../components/MovieImage';

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
    console.log(this.state)
    return (
      <Wrapper>
        {
          loaded?
          <>
            <MovieImageWrapper>
              <MovieImage url={movie.poster_path} />
            </MovieImageWrapper>
            <Details>
              <h1>{movie.original_title}</h1>
              <h3>
                Country:
                {movie.production_countries.map(c => `${c.name} `)}
              </h3>
              <h3>
                Release:
                {movie.release_date}
              </h3>
              <h3>
                Genres:
                {movie.genres.map(g => `${g.name} `)}
              </h3>
              <h3>
                Average vote:
                {movie.vote_average}
              </h3>
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
