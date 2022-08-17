import { apiRefund } from "../../api"
import { getAllRefund } from "./refundActions"

export const gestorAprove = async (dispatch, idRefund, action, page, size) => { 
    try {
      await apiRefund.put(`/gestor/aprovar/${idRefund}?aprovado=${action}`)
      getAllRefund(dispatch, 'ABERTO', page, size)
    } catch (error) {
      console.log(error)
    }
}