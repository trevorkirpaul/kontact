const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LISTS:CREATE':
      return [...state, action.list];
    case 'LISTS:DELETE':
      return state.filter(list => list.id !== action.listID);
    case 'LISTS:ADD_TO_LIST':
      return state.map(list => {
        // find list
        if (list.id === action.listID) {
          // check if contact exists in list
          const included = list.members.filter(
            member => member.id === action.contactID
          );
          if (included.length === 0) {
            // add to list
            return (list.members = [
              ...list.members,
              { id: action.contactID, name: action.contactID },
            ]);
          } else {
            // return original array
            //  if already added
            return list.members;
          }
        } else {
          // return lists not being modified
          return list;
        }
      });
    default:
      return state;
  }
};
