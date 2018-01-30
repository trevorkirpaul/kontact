import uuid from 'uuid';

export const createList = listName => ({
  type: 'LISTS:CREATE',
  list: {
    name: listName,
    members: [],
    id: uuid(),
  },
});

export const deleteList = listID => ({
  type: 'LISTS:DELETE',
  listID,
});
