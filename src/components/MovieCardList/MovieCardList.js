import React from 'react'
import MovieCard from '../MovieCard'
require('dotenv/config')
// render a list of movies
function MovieCardList({ movies }) {
  if (!movies.length || !movies.length === 0) {
    return null
  }
  console.log('renders');
  return movies.map(({id, title, poster_path, vote_average, release_date, overview}) => {
    return (
      <MovieCard
        title={title}
        key={id}
        movieImage={`${process.env.REACT_APP_TMDB_IMAGE_URL}/w185/${poster_path}`}
        rating={vote_average}
        releaseDate={release_date}
        aboutMovie={overview}
      />
    )
  })
}

export default React.memo(MovieCardList)
