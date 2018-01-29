import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 25px;
  margin: 0;
  color: #383838;
`;

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  margin: 0;
  display: inline-block;
  border-bottom: 2px solid coral;
`;

const SubTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  margin: 0;
`;

export default ({ title, subTitle }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
    </Wrapper>
  );
};
