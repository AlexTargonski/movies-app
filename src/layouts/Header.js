import React, { Component } from 'react';
import styled               from 'styled-components';
import { Link }             from 'react-router-dom';
import { connect }          from 'react-redux';

import { findMovies }       from '../actions/movies';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery : '',
    };
  }

  handleFindMovies = e => {
    console.log(e)
    this.setState({ searchQuery : e.target.value });
  }

  handleSubmit = () => {
    this.props.findByQueryMovies(this.state.searchQuery);
  }

  render() {
    console.log(this.state)
    return (
      <Navbar>
        <HeadlineLink to="/">
          MoviesSearch
        </HeadlineLink>
        <input
          type="text"
          onChange={this.handleFindMovies}
        />
        <button onClick={this.handleSubmit}>Search</button>
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

const mapDispatchToProps = dispatch => ({
  findByQueryMovies : query => {
    dispatch(findMovies(query));
  },
})

export default connect(null, mapDispatchToProps)(Header);
