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
    default:
      return state;
  }
};

export default usersReducer;
