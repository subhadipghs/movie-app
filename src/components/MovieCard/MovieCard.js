import React from 'react'
import Card from '../Card'
import CardWrapper from './CardWrapper'
import NoImage from '../../assets/svg/video-camera.svg'

const MovieCard = ({movieImage, title, releaseDate, rating, aboutMovie}) => {
  const [loaded, setLoaded] = React.useState(false)
  const [error, setError] = React.useState(false)

  return (
    <CardWrapper>
      <Card>
        <Card.Flex>
          <Card.Image
            error={error ? 1 : 0}
            alt={title}
            onLoad={() => setLoaded(true)}
            src={loaded ? movieImage : `${NoImage}`}
            onError={e => {
              setError(true)
              if (e.target.src !== `${NoImage}`) {
                e.target.src = `${NoImage}`
              }
            }}
          />
          <Card.FlexCol>
            <Card.Header>{title}</Card.Header>
            <Card.SubText>Release Date: {releaseDate} </Card.SubText>
            <Card.SubText>Rating: {rating}</Card.SubText>
            <Card.Paragraph>{aboutMovie}</Card.Paragraph>
          </Card.FlexCol>
        </Card.Flex>
      </Card>
    </CardWrapper>
  )
}

export default MovieCard
