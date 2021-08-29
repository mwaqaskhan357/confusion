import { type } from "../type";

export const resetForm = () => (dispatch) => {
  dispatch({
    type: type.RESET_FORM,
  });
};
