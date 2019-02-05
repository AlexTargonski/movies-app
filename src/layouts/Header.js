import React  from 'react';
import styled from 'styled-components';

const Header = () => (
  <Navbar>
    <h1>MoviesSearch</h1>
  </Navbar>
);

const Navbar = styled.div`
  width      : 100%;
  background : #2d2a41;
  padding    : 5px 5%;
  color      : #ffff;
`;

export default Header;
