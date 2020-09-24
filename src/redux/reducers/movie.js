import {
  FETCH_MOVIE,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
  FETCH_MOVIE_FINISHED
} from '../types/movies'

const initialMovieState = {
  loading: false,
  data: [],
  error: '',
  finished: false
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
        data: action.payload,
        loading: false,
      }
    case FETCH_MOVIE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    case FETCH_MOVIE_FINISHED:
      return {
        ...state,
        finished: true
      }
    default:
      return state
  }
}
