import React from 'react';
import Contact from './Contact';
import styled from 'styled-components';
import TitlePanel from '../reusable/TitlePanel';
import ContactsFilter from './ContactsFilter';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 25px;
`;

export default ({ contacts }) => {
  if (contacts) {
    return (
      <div>
        <TitlePanel title="Contacts" />
        <ContactsFilter />
        <List>
          {contacts.map(contact => <Contact key={contact.id} {...contact} />)}
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
