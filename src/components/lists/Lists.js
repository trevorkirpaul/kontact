import React from 'react';
import List from './List';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 10px;
  padding: 0 25px;
`;

export default ({ lists }) => {
  return (
    <Wrapper>
      <h3>list</h3>
      {lists && lists.map(list => <List key={list.id} {...list} />)}
    </Wrapper>
  );
};
