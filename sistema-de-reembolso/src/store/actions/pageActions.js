export const modifyPage = (dispatch, page, action) => {
  const loading = {
    type: "LOADING_TRUE",
  };
  dispatch(loading);
  switch (action) {
    case "sum":
      const sumPage = {
        type: "MODIFY_PAGE",
        page: page + 1,
      };
      dispatch(sumPage);
      return;
    case "less":
      const lessPage = {
        type: "MODIFY_PAGE",
        page: page - 1,
      };
      dispatch(lessPage);
      return;
    default:
      return;
  }
};

export const modifyItensPerPage = (e, dispatch) => {
  const itensPerPage = {
    type: "MODIFY_ITENS_PER_PAGE",
    size: e.target.value,
  };
  dispatch(itensPerPage);

  const loading = {
    type: "LOADING_TRUE",
  };
  console.log(loading)
  dispatch(loading);
};
