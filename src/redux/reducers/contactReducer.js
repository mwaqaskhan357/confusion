import { type } from "../type";
const initialFeadback = {
  firstname: "",
  lastname: "",
  telnum: "",
  email: "",
  agree: false,
  contactType: "Tel.",
  message: "",
};

export const contactReducer = (state = initialFeadback, action) => {
  switch (action.type) {
    case type.RESET_FORM:
      return state;
    default:
      return state;
  }
};
