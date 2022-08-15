const INITIAL_STATE = {
    token: "",
    isLogged: false,
    isLoading: true,
    typePassword: 'password'
};

const authReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_LOGIN") {
    return {
        ...state,
        token: action.token,
        isLogged: true,
        isLoading: false,
    };
  }

  else if (action.type === "SET_SIGNUP") {
    return {
        ...state,
        token: action.token,
        isLogged: true,
        isLoading: false,
    };
  }

  else if (action.type === "SET_LOADING") {
    return {
        ...state,
        isLoading: action.isLoading,
    };
  }

  else if (action.type === "SET_TYPE_PASSWORD") {
    return {
        ...state,
        typePassword: action.typePassword,
    };
  }

  return state;
};

export default authReducer;
