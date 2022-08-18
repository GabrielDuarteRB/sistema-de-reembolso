const INITIAL_STATE = {
  refund: [],
  refundById: {},
  statusRefund: 'TODOS',
  nameSearch: '',
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
        refund: [],
        refundById: {},
        statusRefund: 'TODOS',
        nameSearch: '',
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
    case "GET_REFUND":
      return {
        ...state,
        refund: action.refund,
        refundById: [],
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
        refund: [],
        refundById: [],
        statusRefund: 'TODOS',
        nameSearch: '',
        isLoading: true,
      };
    default:
      return state;
  }
};

export default refundReducer;
