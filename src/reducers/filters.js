export const defaultState = {
  filterType: null,
  query: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'FILTERS:SET_TYPE':
      return {
        ...state,
        filterType: action.filterType,
      };
    case 'FILTERS:SET_QUERY':
      return {
        ...state,
        query: action.query,
      };
    default:
      return state;
  }
};
