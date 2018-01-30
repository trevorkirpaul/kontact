import React from 'react';
import { Button, Input, Icon } from 'antd';
import styled from 'styled-components';

// styles
const Wrapper = styled.div`
  margin: 10px;
  padding: 0 25px;
`;

const FieldWrapper = styled.div`
  margin-bottom: 5px;
`;

const iconStyle = {
  color: '#383838',
};

export default ({ createList, handleOnChangeName, listName }) => {
  return (
    <Wrapper>
      <h3>Create</h3>
      <FieldWrapper>
        <Input
          addonBefore="List Name:"
          value={listName}
          onChange={handleOnChangeName}
        />
      </FieldWrapper>
      <Button onClick={createList}>
        <Icon type="folder-add" style={iconStyle} />
        Create List
      </Button>
    </Wrapper>
  );
};
