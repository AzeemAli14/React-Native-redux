import {increase, decrease} from './ActionType';

const initialState = {
  value: 0,
};

export const endState = (state = initialState, action) => {
  //switch case
  switch (action.type) {
    case increase:
      return {...state, value: state.value + 1};
    case decrease:
      return {...state, value: state.value - 1};
    default:
      return state;
  }
};
