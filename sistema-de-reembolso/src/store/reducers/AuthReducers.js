const INITIAL_STATE = {
    auth: {
        token: '',
        isLogged: false,
        isLoading: false,
    }
}

const authReducer = (state = INITIAL_STATE, action) => {
    if(state.type === 'SET_LOGIN'){
        return {
            auth: {
                token: action.token,
                isLogged: true
            }
        }
    }
    return state
}

export default authReducer

