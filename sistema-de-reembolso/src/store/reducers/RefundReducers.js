const INITIAL_STATE = {
<<<<<<< HEAD
  refund: [],
  refundId: [],
  isLoading: false,
  page: "0",
  totalPages: "",
  size: "5",
=======
    refund: [],
    refundId: [],
    isLoading: false,
>>>>>>> dfe36ee7ec42cc038bdf38ad2a7efe1868681d55
};

const refundReducer = (state = INITIAL_STATE, action) => {
<<<<<<< HEAD
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
        refundId: [],
        isLoading: false,
        page: action.page,
        totalPages: action.totalPages,
        size: action.size,
      };
    case "GET_REFUND_BY_ID":
      return {
        ...state,
        refundId: action.refundId,
        isLoading: false,
      };
=======
    switch(action.type) {
        case 'LOADING_TRUE':
            return {
                ...state,
                isLoading: true
            }
        case 'LOADING_FALSE':
            return {
                ...state,
                isLoading: false
            }
        case 'GET_REFUND':
            return {
                ...state,
                refund: action.refund,
                refundId: [],
                isLoading: false,
            }
        case 'GET_REFUND_BY_ID':
            return {
                ...state,
                refundId: action.refundId,
                isLoading: false
            }
        default:
            return state
    }
}
>>>>>>> dfe36ee7ec42cc038bdf38ad2a7efe1868681d55

    default:
      return state;
  }
};

export default refundReducer;
