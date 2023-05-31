import { initialState } from "./initialState";
import { SET_FAVOURITE_MOVIE, SET_GENRES, SET_MOVIES } from "./types";

//create the logic that manipulates the state
export function reducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case SET_GENRES:
      return { ...state, genres: payload };

    case SET_MOVIES:
      return {
        ...state,
        movies: { ...state.movies, [payload.id]: payload.movies },
        lastClickedId: payload.id,
      };

    case SET_FAVOURITE_MOVIE:
      const indexOf = state.favouriteMovies.indexOf(payload);

      console.log(indexOf, payload);

      if (indexOf === -1) {
        return {
          ...state,
          favouriteMovies: [...state.favouriteMovies, payload],
        };
      }

      const favouriteMovies = [...state.favouriteMovies];
      favouriteMovies.splice(indexOf, 1);
      return { ...state, favouriteMovies };

    default:
      console.log("Reducer started or INVALID reducer type, probably a typo");
      return state;
  }
}
