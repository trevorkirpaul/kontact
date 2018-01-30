import React from 'react';
import { connect } from 'react-redux';
import { deleteList } from '../../actions/lists';
import { Button } from 'antd';

export const List = ({ name, deleteList, id }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <Button onClick={() => deleteList(id)}>Remove</Button>
    </div>
  );
};

export const mapDispatchToProps = dispatch => ({
  deleteList: listID => dispatch(deleteList(listID)),
});

export default connect(null, mapDispatchToProps)(List);
