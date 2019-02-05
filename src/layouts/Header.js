import React       from 'react';
import styled      from 'styled-components';

import SearchInput from '../components/SearchInput';

const Header = () => (
  <Navbar>
    <Headline>
      MoviesSearch
    </Headline>
    <SearchInput />
  </Navbar>
);

const Navbar = styled.div`
  display        : flex;
  flex-direction : row;
  width          : 100%;
  background     : #2d2a41;
  padding        : 15px 5%;
  color          : #ffff;
`;

const Headline = styled.h1`
  margin : 0;
`;

export default Header;
