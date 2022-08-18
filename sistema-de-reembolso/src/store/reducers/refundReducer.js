const INITIAL_STATE = {
  refund: [],
  refundById: {},
  isLoading: false,
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
    default:
      return state;
  }
};

export default refundReducer;
