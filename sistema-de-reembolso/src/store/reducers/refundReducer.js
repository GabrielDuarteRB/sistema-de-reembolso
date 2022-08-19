const INITIAL_STATE = {
  refundsByUser: [],
  allRefunds: [],
  refundById: {},
  statusRefund: "TODOS",
  nameSearch: "",
  isLoading: true,
};

const refundReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING_TRUE":
      return {
        ...state,
        isLoading: true,
      };

    case "LOADING_FALSE":
      return {
        ...state,
        isLoading: false,
      };

    case "SET_CLEAR":
      return {
        refundsByUser: [],
        refundById: {},
        statusRefund: "TODOS",
        nameSearch: "",
        isLoading: true,
      };

    case "SET_STATUS":
      return {
        ...state,
        statusRefund: action.statusRefund,
      };

    case "SET_NAME_SEARCH":
      return {
        ...state,
        nameSearch: action.nameSearch,
      };

    case "GET_REFUND_BY_USER":
      return {
        ...state,
        refundsByUser: action.refundsByUser,
        refundById: [],
        isLoading: false,
      };

    case "GET_ALL_REFUNDS":
      return {
        ...state,
        allRefunds: action.allRefunds,
        isLoading: false,
      };

    case "GET_REFUND_BY_ID":
      return {
        ...state,
        refundById: action.refundById,
        isLoading: false,
      };

    case "SET_LOGOUT":
      return {
        refundsByUser: [],
        refundById: [],
        statusRefund: "TODOS",
        nameSearch: "",
        isLoading: true,
      };

    default:
      return state;
  }
};

export default refundReducer;
