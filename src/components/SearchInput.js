import React, { Component } from 'react';
import styled               from 'styled-components';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query : '',
    }

    this.handleChange    = this.handleChange.bind(this);
    this.getSerchResults = this.getSerchResults.bind(this);
  }

  handleChange(e) {
    this.setState({ query : e.target.value });
  }

  getSerchResults() {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TOKEN}&language=en-US&query=${this.state.query}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Wrapper>
        <Input
          type="text"
          onChange={this.handleChange}
        />
        <Button onClick={this.getSerchResults}>
          Search
        </Button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width           : 70%;
  display         : flex;
  flex-direction  : row;
  justify-content : flex-end
`;

const Input = styled.input`
  margin-right : 3px;
`;

const Button = styled.button`
  background : #2be989;
  border     : 0;
  font-size  : 15px;
  color      : #ffff;
`;

export default SearchInput;
