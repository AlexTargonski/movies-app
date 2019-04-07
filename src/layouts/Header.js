import React, { Component } from 'react';
import styled               from 'styled-components';
import { Link }             from 'react-router-dom';
import { connect }          from 'react-redux';
import { withRouter }       from 'react-router-dom';
import axios                from 'axios';

import { findMovies }       from '../actions/movies';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery    : '',
      dropdownMovies : [],
      isOpen         : false,
    };
  }

  handleFindMovies = e => {
    this.setState({ searchQuery : e.target.value });

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TOKEN}&language=en-US&query=${e.target.value}&page=1&include_adult=false`)
      .then(res => this.setState({ dropdownMovies : res.data.results.splice(0, 4), isOpen : true }));
  }

  handleSubmit = () => {
    this.props.findByQueryMovies(this.state.searchQuery);
    this.props.history.push('/search');
  }

  hideDropDown = () => {
    this.setState({ isOpen : false });
  }

  render() {
    return (
      <Navbar>
        <HeadlineLink to="/">
          MoviesSearch
        </HeadlineLink>
        <div>
          <SearchInput
            type="text"
            onChange={this.handleFindMovies}
          />
          {
            this.state.isOpen &&
            <Dropdown>
              {
                this.state.dropdownMovies.map(movie =>
                  <li key={movie.id}>
                    <Link to={`/${movie.id}`} onClick={this.hideDropDown}>
                      <Wrapper>
                        <Image src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="movie poster"/>
                        <p>{movie.title}</p>
                      </Wrapper>
                    </Link>
                  </li>
                )
              }
            </Dropdown>
          }
          <SearchButton onClick={this.handleSubmit}>
            Search
          </SearchButton>
        </div>
      </Navbar>
    );
  }
}

const Navbar = styled.div`
  display        : flex;
  flex-direction : row;
  background     : #2d2a41;
  padding        : 15px 5%;
`;

const HeadlineLink = styled(Link)`
  color           : #ffff;
  font-size       : 25px;
  text-decoration : none;
`;

const SearchInput = styled.input`
  height : 18px;
`;

const SearchButton = styled.button`
  background : #459b45;
  border     : 0;
  color      : #fff;
  height     : 25px;
`;

const Dropdown = styled.ul`
  position   : absolute
  list-style : none;
  background : #fff;
  padding    : 1%;
  box-shadow : 0px 3px 10px 0px rgba(0,0,0,0.6);
`;

const Wrapper = styled.div`
  display : flex;
`;

const Image = styled.img`
  width : 110px;
`;

const mapDispatchToProps = dispatch => ({
  findByQueryMovies : query => {
    dispatch(findMovies(query));
  },
})

export default connect(null, mapDispatchToProps)(withRouter(Header));
