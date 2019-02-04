import React, { Component } from 'react';
import styled               from 'styled-components';

import MovieImage           from '../components/MovieImage';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies : [],
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TOKEN}&language=en-US&page=1`)
      .then(response => response.json())
      .then(result => this.setState({ movies : result.results }))
      .catch(error => console.log(error));
  }

  render() {
    const { movies } = this.state

    return (
      <Wrapper>
        {
          movies.map((movie, index) =>
            <Item key={movie.id} clearfix>
              <MovieImage url={movie.poster_path} />
              <h2>{movie.original_title}</h2>
              <p>{movie.overview}</p>
            </Item>
          )
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

export default HomePage;
