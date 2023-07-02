import { ActionTypes } from "./types";

export const openModal = () => {
  return {
    type: ActionTypes.OPEN_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: ActionTypes.CLOSE_MODAL,
  };
};
