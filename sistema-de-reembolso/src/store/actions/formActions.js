export const handleForm = (dispatch, switchForm) => {
  if (switchForm === "disable") {
    const disable = {
      type: "DISABLE_FORM",
    };
    dispatch(disable);
  }

  if (switchForm === "enable") {
    const enable = {
      type: "ENABLE_FORM",
    };
    dispatch(enable);
  }
};

export const handleTypePassword = (dispatch, type) => {
  if (type === "password") {
    const password = {
      type: "SET_TYPE_PASSWORD",
      typePassword: "text",
    };
    dispatch(password);
    return;
  }

  const password = {
    type: "SET_TYPE_PASSWORD",
    typePassword: "password",
  };
  dispatch(password);
};
