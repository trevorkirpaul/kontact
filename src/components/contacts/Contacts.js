import React from 'react';
import Contact from './Contact';

export default ({ contacts }) => {
  if (contacts.data) {
    return (
      <div>
        <h3>Contacts</h3>
        <ul>
          {contacts.data.map(contact => (
            <Contact key={contact.id} {...contact} />
          ))}
        </ul>
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
