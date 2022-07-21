import { atom } from "recoil";

export const subtotalState = atom({
    key: 'subtotalState', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
  });