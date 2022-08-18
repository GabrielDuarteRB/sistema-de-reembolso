const INITIAL_STATE = {
  refund: [],
  refundId: [],
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
    case "LOADING_FALSE":
      return {
        ...state,
        isLoading: false,
      };
    case "GET_REFUND":
      return {
        ...state,
        refund: action.refund,
        refundId: [],
        isLoading: false,
      };
    case "GET_REFUND_BY_ID":
      return {
        ...state,
        refundId: action.refundId,
        isLoading: false,
      };
    case "SET_LOGOUT":
      return {
        refund: [],
        refundId: [],
        isLoading: true,
      };
    default:
      return state;
  }
};

export default refundReducer;
