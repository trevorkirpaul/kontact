const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'CONTACTS:RECIEVE_ALL':
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};
