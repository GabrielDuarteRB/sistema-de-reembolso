import { getAllRefunds, getRefundByName, getRefundsByUser } from "../store/actions/refundActions";

export const chooseGet = (dispatch, nameSearch, statusRefund, page, size, role) => {
    if (role === "ROLE_COLABORADOR") {
        getRefundsByUser(dispatch, statusRefund, page, size);
        return;
    }

    if (nameSearch === "") {
        getAllRefunds(dispatch, statusRefund, page, size);
        return
      }
      getRefundByName(dispatch, nameSearch, statusRefund, page, size);
}