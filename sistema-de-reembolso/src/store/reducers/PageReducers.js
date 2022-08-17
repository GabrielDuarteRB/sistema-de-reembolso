const INITIAL_STATE = {
    page: '0',
    totalPages: '',
    size: '5'
};

const pageReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'GET_PAGES':
            return {
                ...state,
                page: action.page,
                totalPages: action.totalPages,
            }
        case 'MODIFY_PAGE':
            return {
                ...state,
                page: action.page
            }
        case 'MODIFY_ITENS_PER_PAGE':
            return {
                ...state,
                size: action.size
            }
        default:
            return state
    }
}

export default pageReducer