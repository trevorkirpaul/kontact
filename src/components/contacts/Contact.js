import React from 'react';
import { Card, Icon, Button } from 'antd';
import styled from 'styled-components';

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default ({
  name,
  age,
  gender,
  email,
  phone,
  city,
  state,
  country,
  id,
  showModal,
  disabled,
}) => {
  const header = (
    <HeaderWrapper>
      {name}
      <Button disabled={disabled} onClick={() => showModal(id, name)}>
        Add To List
      </Button>
    </HeaderWrapper>
  );
  return (
    <ListItem>
      <Card title={header}>
        {gender === 'male' ? (
          <p>
            <Icon type="man" /> {gender}
          </p>
        ) : (
          <p>
            <Icon type="woman" /> {gender}
          </p>
        )}
        <p>
          <Icon type="mail" /> {email}
        </p>
        <p>
          <Icon type="phone" /> {phone}
        </p>
        <p>
          <Icon type="home" /> {city}, {state}, {country}
        </p>
      </Card>
    </ListItem>
  );
};
