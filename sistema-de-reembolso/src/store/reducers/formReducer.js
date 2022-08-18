const INITIAL_STATE = {
  disabled: false,
  typePassword: "password",
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DISABLE_FORM":
      return {
        ...state,
        disabled: true,
      };

    case "ENABLE_FORM":
      return {
        ...state,
        disabled: false,
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

export default formReducer;
