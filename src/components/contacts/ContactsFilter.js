import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilterType, setFilterQuery } from '../../actions/filters';
import { Input, Button, Menu, Dropdown, Icon } from 'antd';
import styled from 'styled-components';

// styling

const Wrapper = styled.div`
  margin: 10px;
  padding: 0 25px;
`;

const DropdownWrapper = styled.div`
  margin-bottom: 10px;
`;

const FieldsWrapper = styled.div`
  margin-bottom: 10px;
`;

// component

export class ContactsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null,
      filterType: null,
    };
  }
  // set query
  handleOnChangeQuery = e => {
    const query = e.target.value;
    this.setState(() => ({
      query,
    }));
  };
  // set filterType
  handleSetFilter = e => {
    this.setState({ filterType: e.key });
  };
  // dispatch values if exist
  handleSubmit = () => {
    if (this.state.query && this.state.filterType) {
      this.props.setFilterType(this.state.filterType);
      this.props.setFilterQuery(this.state.query);
      console.log('werks');
    }
  };

  render() {
    const filterTypeMenu = (
      <Menu onClick={this.handleSetFilter}>
        <Menu.Item key="Name">Name</Menu.Item>
        <Menu.Item key="City">City</Menu.Item>
        <Menu.Item key="State">State</Menu.Item>
        <Menu.Item key="Country">Country</Menu.Item>
      </Menu>
    );
    const { filterType } = this.state;
    return (
      <Wrapper>
        <h3>Search By Name:</h3>

        <DropdownWrapper>
          <Dropdown overlay={filterTypeMenu}>
            <Button>
              {filterType ? filterType : 'Select Filter Type... '}
              <Icon type="down" />
            </Button>
          </Dropdown>
        </DropdownWrapper>

        <FieldsWrapper>
          <Input
            placeholder="Enter query..."
            value={this.state.query}
            onChange={this.handleOnChangeQuery}
          />
        </FieldsWrapper>

        <div>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </div>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setFilterType: filterType => dispatch(setFilterType(filterType)),
  setFilterQuery: query => dispatch(setFilterQuery(query)),
});

export default connect(null, mapDispatchToProps)(ContactsFilter);
