export default (state = {}, isLoading = false, action) => {
  switch (action.type) {
    case IS_LOADING:
      return;

    default:
      return state;
  }
};
