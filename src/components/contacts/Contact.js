import React from 'react';
import { Card, Icon } from 'antd';
import styled from 'styled-components';

const ListItem = styled.li`
  margin-bottom: 10px;
`;

export default ({ name, age, gender, email, phone, city, state, country }) => {
  return (
    <ListItem>
      <Card title={name}>
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
