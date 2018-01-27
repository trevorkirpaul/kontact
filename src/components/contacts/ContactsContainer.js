import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../../actions/contacts';

import Contacts from './Contacts';

export class ContactsContainer extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return <Contacts contacts={this.props.contacts} />;
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);
