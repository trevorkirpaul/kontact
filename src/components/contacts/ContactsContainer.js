import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../../actions/contacts';
import { filterContacts } from '../../selectors/contacts';

import Contacts from './Contacts';

export class ContactsContainer extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return <Contacts contacts={this.props.contacts} />;
  }
}

const mapStateToProps = state => {
  const contacts = state.contacts.data;
  const filterType = state.filters.filterType;
  const query = state.filters.query;
  return {
    contacts: filterContacts(contacts, filterType, query),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);
