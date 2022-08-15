const INITIAL_STATE = {
  token: "",
  isLogged: false,
  isLoading: true,
  typePassword: "password",
  welcomeMessage: true,
};

const authReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_LOGIN") {
    return {
      ...state,
      token: action.token,
      isLogged: true,
      isLoading: false,
    };
  } else if (action.type === "SET_SIGNUP") {
    return {
      ...state,
      token: action.token,
      isLogged: true,
      isLoading: false,
    };
  } else if (action.type === "SET_LOGOUT") {
    return {
      ...state,
      token: "",
      isLogged: false,
    };
  } else if (action.type === "SET_LOADING") {
    return {
      ...state,
      isLoading: action.isLoading,
    };
  } else if (action.type === "SET_TYPE_PASSWORD") {
    return {
      ...state,
      typePassword: action.typePassword,
    };
  }
  // else if (action.type === "SET_WELCOME") {
  //   return {
  //     ...state,
  //     welcomeMessage: false,
  //   };
  // }

  return state;
};

export default authReducer;
