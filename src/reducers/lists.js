const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LISTS:CREATE':
      return [...state, action.list];
    case 'LISTS:DELETE':
      return state.filter(list => list.id !== action.listID);
    default:
      return state;
  }
};
