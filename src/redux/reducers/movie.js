import {
  FETCH_MOVIE,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
} from '../types/movies'

const initialMovieState = {
  loading: false,
  data: [],
  error: '',
}

export const movieReducer = (state = initialMovieState, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return {
        ...state,
        loading: true,
      }
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      }
    case FETCH_MOVIE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    default:
      return state
  }
}
