import React, { Component } from 'react';

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
      <>
        {
          movies.map(movie =>
            <div key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.original_title} poster`}/>
              <h2>{movie.original_title}</h2>
            </div>
          )
        }
      </>
    );
  }
}

export default HomePage;
