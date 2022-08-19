const INITIAL_STATE = {
  users: [],
  name: "",
  email: "",
  foto: "",
  isLoading: true,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        name: action.name,
        email: action.email,
        foto: action.foto,
        isLoading: false,
      };

    case "SET_LOGOUT":
      return {
        name: "",
        email: "",
        foto: "",
        isLoading: true,
        users: [],
      };

    case "GET_ALL_USERS":
      return {
        ...state,
        users: action.users,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default usersReducer;
