import React from 'react';
import { Modal, Dropdown, Menu, Icon } from 'antd';
import styled from 'styled-components';

// styling

const DropDownWrapper = styled.div``;

const spanStyle = {
  fontWeight: '600',
  textDecoration: 'underline',
};

const dropDownStyle = {
  cursor: 'pointer',
};

const fadedStyle = {
  opacity: '0.6',
};

//  component

export const AddToList = ({
  visible,
  hideModal,
  handleAdd,
  id,
  name,
  lists,
  listID,
  setListIDtoState,
}) => {
  const listMenu = (
    <Menu onClick={e => setListIDtoState(e.key)}>
      {lists.map(list => <Menu.Item key={list.id}>{list.name}</Menu.Item>)}
    </Menu>
  );
  return (
    <Modal
      title="Add Contact To List"
      visible={visible}
      onCancel={hideModal}
      onOk={handleAdd}
    >
      <DropDownWrapper>
        <Dropdown overlay={listMenu}>
          <span style={dropDownStyle} className="ant-dropdown-link">
            Select List <Icon type="down" />
          </span>
        </Dropdown>
      </DropDownWrapper>
      <p style={fadedStyle}>ContactID: {id}</p>
      {listID && <p style={fadedStyle}>ListID: {listID}</p>}

      <p>
        Are you sure you want to add <span style={spanStyle}>{name}</span> to
        the list?
      </p>
    </Modal>
  );
};

export default AddToList;
