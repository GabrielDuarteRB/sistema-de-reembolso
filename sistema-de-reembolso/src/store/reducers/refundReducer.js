const INITIAL_STATE = {
  refund: [],
  refundById: {},
  isLoading: true,
};

const refundReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING_TRUE":
      console.log(`oi`)
      return {
        ...state,
        isLoading: true,
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
        isLoading: true,
      };
    default:
      return state;
  }
};

export default refundReducer;
