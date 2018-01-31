const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LISTS:CREATE':
      return [...state, action.list];
    case 'LISTS:DELETE':
      return state.filter(list => list.id !== action.listID);
    case 'LISTS:ADD_TO_LIST':
      return state.map(list => {
        // find the correct list to
        // add contact to
        if (list.id === action.listID) {
          // check if contact added
          if (list.members.includes(action.contactID)) {
            return list;
          } else {
            // create new arr w/contactID
            // return list with new contactID in members arr
            const newMembers = [...list.members, action.contactID];
            return {
              ...list,
              members: newMembers,
            };
          }
        } else {
          return list;
        }
      });
    default:
      return state;
  }
};
