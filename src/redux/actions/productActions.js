import { ActionTypes } from "../constants/actions-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUTCS,
    payload: products,
  };
};

export const selectedProducts = (products) => {
  return {};
};
