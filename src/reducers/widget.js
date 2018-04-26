import { FETCH_WIDGET } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_WIDGET:
      return action.payload || false;

    default:
      return state;
  }
}
