export const filterContacts = (contacts, filterType, query) => {
  // determing how to filter contacts
  // based on arguement filterType
  if (filterType === null) {
    return contacts;
  } else if (filterType === 'Name') {
    return contacts.filter(contact => {
      return contact.name.includes(query);
    });
  } else if (filterType === 'Country') {
    return contacts.filter(contact => {
      return contact.country.includes(query);
    });
  } else if (filterType === 'State') {
    return contacts.filter(contact => {
      return contact.state.includes(query);
    });
  } else if (filterType === 'City') {
    return contacts.filter(contact => {
      return contact.city.includes(query);
    });
  }
};
