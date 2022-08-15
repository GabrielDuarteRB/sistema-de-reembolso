import axios from 'axios'

export const apiRefund = axios.create({
    baseURL: 'https://sistema-de-reembolso-api.herokuapp.com'
})