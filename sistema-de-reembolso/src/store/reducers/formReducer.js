const INITIAL_STATE = {
  disabled: false,
  typePassword: "password",
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DISABLE_FORM":
      return {
        disabled: true,
      };

    case "ENABLE_FORM":
      return {
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
