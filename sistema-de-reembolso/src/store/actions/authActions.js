import { apiRefund } from "../../api"

export const handleLogin = async (dispatch, values, navigate) => {
    console.log(values)
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