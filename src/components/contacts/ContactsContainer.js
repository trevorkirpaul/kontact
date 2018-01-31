import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../../actions/contacts';
import { filterContacts } from '../../selectors/contacts';
import { addContactToList } from '../../actions/lists';

import Contacts from './Contacts';
import AddToList from './AddToList';

export class ContactsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      id: null,
      listID: null,
      name: null,
      disabled: true,
    };
  }
  // modal to add contact to list
  showModal = (id, name) => {
    this.setState({ visible: true, id, name });
  };
  hideModal = () => {
    this.setState({ visible: false, id: null });
  };
  setListIDtoState = listID => {
    this.setState({ listID });
  };
  handleAdd = () => {
    const { id, listID } = this.state;
    this.props.addContactToList(id, listID);
    this.setState({ visible: false });
  };

  componentDidMount() {
    this.props.fetchContacts();
  }
  componentWillReceiveProps(nextProps) {
    const lists = nextProps.lists;
    if (lists.length > 0) {
      this.setState({ disabled: false });
    }
  }
  render() {
    return (
      <div>
        <Contacts
          contacts={this.props.contacts}
          showModal={this.showModal}
          disabled={this.state.disabled}
        />
        <AddToList
          id={this.state.id}
          name={this.state.name}
          visible={this.state.visible}
          hideModal={this.hideModal}
          handleAdd={this.handleAdd}
          lists={this.props.lists}
          listID={this.state.listID}
          setListIDtoState={this.setListIDtoState}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const contacts = state.contacts.data;
  const filterType = state.filters.filterType;
  const query = state.filters.query;
  return {
    contacts: filterContacts(contacts, filterType, query),
    lists: state.lists,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
  addContactToList: (contactID, listID) =>
    dispatch(addContactToList(contactID, listID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);
