const INITIAL_STATE = {
  token: "",
  role: "",
  isLogged: false,
  isLoading: true,
  typePassword: "password",
};

const authReducer = (state = INITIAL_STATE, action) => {
  console.log(action.role);
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        token: action.token,
        role: action.role,
        isLogged: true,
        isLoading: false,
      };

    case "SET_SIGNUP":
      return {
        ...state,
        token: action.token,
        role: action.role,
        isLogged: true,
        isLoading: false,
      };

    case "SET_LOGOUT":
      return {
        ...state,
        token: "",
        role: "",
        isLogged: false,
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case "SET_TYPE_PASSWORD":
      return {
        ...state,
        typePassword: action.typePassword,
      };
    default:
      return state;
  }
};

export default authReducer;
