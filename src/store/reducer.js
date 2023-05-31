import { initialState } from "./initialState";
import { SET_GENRES } from "./types";

//create the logic that manipulates the state
export function reducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case SET_GENRES:
      return { ...state, genres: payload };

    default:
      console.log("Reducer started or INVALID reducer type, probably a typo");
      return state;
  }
}
