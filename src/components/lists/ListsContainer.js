import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createList } from '../../actions/lists';
import TitlePanel from '../reusable/TitlePanel';
import ListActions from './ListActions';
import Lists from './Lists';

export class ListsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listName: null,
    };
  }
  handleCreateList = () => {
    if (this.state.listName !== null) {
      this.props.createList(this.state.listName);
    }
  };
  handleOnChangeName = e => {
    this.setState({ listName: e.target.value });
  };
  render() {
    return (
      <div>
        <TitlePanel
          title="Lists"
          subTitle="View your personally created lists"
        />
        <ListActions
          createList={this.handleCreateList}
          handleOnChangeName={this.handleOnChangeName}
          listName={this.state.listName}
        />
        <Lists lists={this.props.lists} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  lists: state.lists,
});

export const mapDispatchToProps = dispatch => ({
  createList: listName => dispatch(createList(listName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListsContainer);
