import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  setFilterType,
  setFilterQuery,
  resetFilters,
} from '../../actions/filters';
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

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
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
    }
  };

  // reset filters
  handleReset = () => {
    // first check if we even need to reset filters
    if (this.state.query !== null) {
      this.props.resetFilters();
      this.setState({ query: null, filterType: null });
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
        <h3>Search By:</h3>

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

        <ButtonsWrapper>
          <Button type="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
          <Button onClick={this.handleReset}>Reset</Button>
        </ButtonsWrapper>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setFilterType: filterType => dispatch(setFilterType(filterType)),
  setFilterQuery: query => dispatch(setFilterQuery(query)),
  resetFilters: () => dispatch(resetFilters()),
});

export default connect(null, mapDispatchToProps)(ContactsFilter);
