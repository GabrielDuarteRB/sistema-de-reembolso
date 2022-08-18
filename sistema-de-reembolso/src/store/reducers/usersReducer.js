const INITIAL_STATE = {
  name: "",
  email: "",
  foto: "",
  isLoading: true,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
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
      };
    default:
      return state;
  }
};

export default usersReducer;
