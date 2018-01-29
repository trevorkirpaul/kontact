import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.nav``;
const List = styled.ul`
  list-style: none;
  display: flex;
`;
const LItem = styled.li`
  margin: 10px;
`;
export default () => {
  return (
    <Wrapper>
      <List>
        <LItem>
          <Link to="/">
            <Button type="primary">Home</Button>
          </Link>
        </LItem>
        <LItem>
          <Link to="/contacts">
            <Button type="primary">Contacts</Button>
          </Link>
        </LItem>
      </List>
    </Wrapper>
  );
};
