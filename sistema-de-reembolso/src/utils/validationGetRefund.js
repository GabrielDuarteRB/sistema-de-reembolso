import { getAllRefunds, getRefundByName, getRefundsByUser } from "../store/actions/refundActions";
import { getAllUsers, getUsersByName } from "../store/actions/usersActions";

export const chooseGet = (dispatch, nameSearch, statusRefund, page, size, role) => {
    if (role === "ROLE_COLABORADOR") {
        getRefundsByUser(dispatch, statusRefund, page, size);
        return;
    }

    if (nameSearch === "") {
        getAllRefunds(dispatch, statusRefund, page, size);
        console.log(getAllRefunds)
        return
      }
      getRefundByName(dispatch, nameSearch, statusRefund, page, size);
}

export const chooseGetUsers = (dispatch, nameSearch, page, size) => {
    if (nameSearch === "") {
        getAllUsers(dispatch, page, size);
        return;
      }
      getUsersByName(dispatch, nameSearch, page, size);
}