import React from 'react'
import MovieCard from '../MovieCard'

// render a list of movies
function MovieCardList(props) {
  if (!props.movies.length || !props.movies.length === 0) {
    return null
  }

  return props.movies.map(({id, title, image, rating, releaseDate, about}) => {
    return (
      <MovieCard
        title={title}
        key={id}
        movieImage={image}
        rating={rating}
        releaseDate={releaseDate}
        aboutMovie={about}
      />
    )
  })
}

export default React.memo(MovieCardList)
