import { apiRefund } from "../../api"

export const handleLogin = async (dispatch, values, navigate) => {
    try {
        const {data} = await apiRefund.post('/usuario/login', values)
        const logged = {
            type: 'SET_LOGIN',
            token: data,
        }
        localStorage.setItem('token', data)
        apiRefund.defaults.headers.common['Authorization'] = data
        dispatch(logged)
        navigate('/principal')
    } catch (error) {
        console.log(error)
    }
}

export const handleSignUp = async (dispatch, values, navigate) => {
    try {
        const {data} = await apiRefund.post('/usuario/cadastro', values)
        console.log(data)
        const signUp = {
            type: 'SET_SIGNUP',
            token: data,
        }
        localStorage.setItem('token', data)
        apiRefund.defaults.headers.common['Authorization'] = data
        dispatch(signUp)
        navigate('/principal')
    } catch (error) {   
        console.log(error)
    }   
}