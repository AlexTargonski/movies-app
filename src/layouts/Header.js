import React       from 'react';
import styled      from 'styled-components';
import { Link }    from 'react-router-dom';

import SearchInput from '../components/SearchInput';

const Header = () => (
  <Navbar>
    <HeadlineLink to="/">
      MoviesSearch
    </HeadlineLink>
    <SearchInput />
  </Navbar>
);

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

export default Header;
