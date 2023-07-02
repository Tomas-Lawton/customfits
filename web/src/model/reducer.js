import { ActionTypes } from "./types";

const initialState = {
  isOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.OPEN_MODAL:
      console.log("open modal");
      return {
        ...state,
        isOpen: true,
      };
    case ActionTypes.CLOSE_MODAL:
      console.log("close modal");
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default reducer;
