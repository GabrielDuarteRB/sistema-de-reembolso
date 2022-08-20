const INITIAL_STATE = {
  page: 0,
  totalPages: "",
  size: 5,
  itensPerPage: 0
};

const pageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_PAGES":
      return {
        ...state,
        page: action.page,
        totalPages: action.totalPages,
        itensPerPage: action.itensPerPage
      };
    case "MODIFY_PAGE":
      return {
        ...state,
        page: action.page,
      };
    case "MODIFY_ITENS_PER_PAGE":
      return {
        ...state,
        size: action.size,
      };
    case "SET_RESET":
      return {
        page: 0,
        totalPages: "",
        size: 5,
        itensPerPage: 0
      };
    case "SET_CLEAR":
      return {
        page: 0,
        totalPages: "",
        size: 5,
        itensPerPage: 0
      };
    case "SET_LOGOUT":
      return {
        page: 0,
        totalPages: "",
        size: 5,
      };
    default:
      return state;
  }
};

export default pageReducer;
