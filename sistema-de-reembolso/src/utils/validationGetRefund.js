import {
  getAllRefunds,
  getRefundByName,
  getRefundsByUser,
} from "../store/actions/refundActions";
import { getAllUsers, getUsersByName } from "../store/actions/usersActions";

export const chooseGet = async (
  dispatch,
  nameSearch,
  statusRefund,
  page,
  size,
  role,
) => {
  if (role === "ROLE_COLABORADOR") {
    await getRefundsByUser(dispatch, statusRefund, page, size);
    return;
  }

  console.log(nameSearch)
  if (nameSearch === "") {
    await getAllRefunds(dispatch, statusRefund, page, size);
    return;
  }
  await getRefundByName(dispatch, nameSearch, statusRefund, page, size);
};

export const chooseGetUsers = (dispatch, nameSearch, page, size) => {
  if (nameSearch === "") {
    getAllUsers(dispatch, page, size);
    return;
  }
  getUsersByName(dispatch, nameSearch, page, size);
};
