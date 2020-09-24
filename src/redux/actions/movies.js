import tmdbAPI from '../../api/tmdbAPI'

import {
  FETCH_MOVIE,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
  FETCH_MOVIE_FINISHED
} from '../types/movies'

export const fetchMovie = () => {
  return {
    type: FETCH_MOVIE,
  }
}

export const fetchMovieSuccess = data => {
  return {
    type: FETCH_MOVIE_SUCCESS,
    payload: data,
  }
}

export const fetchMovieError = error => {
  return {
    type: FETCH_MOVIE_ERROR,
    payload: error,
  }
}

export const fetchMovieFinished = () => {
  return {
    type: FETCH_MOVIE_FINISHED
  }
}

// search for a movie
export const getMovieSearch = (query, page = 1) => {
  return dispatch => {
    return tmdbAPI
      .get(`search/movie/`, {
        params: {
          query: query,
          page: page,
        },
      })
      .then(async response => {
        dispatch(fetchMovie())
        await dispatch(fetchMovieSuccess(response.data))
        await dispatch(fetchMovieFinished())
      })
      .catch(error => {
        dispatch(fetchMovieError(error.message))
        dispatch(fetchMovieFinished())
      })
  }
}
