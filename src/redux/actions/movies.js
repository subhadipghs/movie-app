import tmdbAPI from '../../api/tmdbAPI'

import {
  FETCH_MOVIE,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
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

// search for a movie
export const getMovieSearch = query => {
  return dispatch => {
    return tmdbAPI
      .get(`search/movie/`, {
        params: {
          query: query,
          page: 1,
        },
      })
      .then(response => {
        dispatch(fetchMovie())
        const searchedResults = response.data
        console.log('movies result', searchedResults)
        dispatch(fetchMovieSuccess(searchedResults))
      })
      .catch(error => dispatch(fetchMovieError(error.message)))
  }
}
