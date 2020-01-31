const INITIAL_STATE = {
  currentUser: null //this will contain the id,displayName, email etc.,
};

const userReducer = (state = INITIAL_STATE, action) => {
  console.log(JSON.stringify(action));
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
