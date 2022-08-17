const INITIAL_STATE = {
    refund: [],
    isLoading: false,
    page: '0',
    totalPages: '',
    size: '5'
};


const refundReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'UPLOAD_TRUE':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_REFUND':
            return {
                refund: action.refund,
                isLoading: false,
                page: action.page,
                totalPages: action.totalPages,
                size: action.size
            }
            
        default:
            return state
    }
}

export default refundReducer