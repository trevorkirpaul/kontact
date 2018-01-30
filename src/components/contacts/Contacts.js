import React from 'react';
import Contact from './Contact';
import styled from 'styled-components';
import TitlePanel from '../reusable/TitlePanel';
import ContactsFilter from './ContactsFilter';

const CountWrapper = styled.div`
  margin: 15px 10px;
  padding: 0 25px;
`;
const CountTitle = styled.h3``;

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
        <CountWrapper>
          <CountTitle>
            {contacts.length}{' '}
            {contacts.length === 1 ? 'contact found' : 'contacts found'}
          </CountTitle>
        </CountWrapper>
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
