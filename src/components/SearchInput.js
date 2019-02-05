import React  from 'react';
import styled from 'styled-components';

const SearchInput = () => (
  <Wrapper>
    <Input
      type="text"
    />
    <Button>
      Search
    </Button>
  </Wrapper>
);

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
