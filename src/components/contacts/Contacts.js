import React from 'react';
import Contact from './Contact';
import styled from 'styled-components';
import TitlePanel from '../reusable/TitlePanel';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 25px;
`;

export default ({ contacts }) => {
  if (contacts.data) {
    return (
      <div>
        <TitlePanel title="Contacts" subTitle="Find all" />
        <List>
          {contacts.data.map(contact => (
            <Contact key={contact.id} {...contact} />
          ))}
        </List>
      </div>
    );
  } else {
    return (
      <div>
        <p>LOADING</p>
      </div>
    );
  }
};
