const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'STATUS:LOADING':
      return {
        ...state,
        error: action.error,
        loading: action.loading,
      };
    case 'STATUS:SUCCESS':
      return {
        ...state,
        error: action.error,
        loading: action.loading,
        message: action.loading,
      };
    case 'STATUS:FAIL':
      return {
        ...state,
        loading: action.loadng,
        error: action.error,
      };
    default:
      return state;
  }
};
