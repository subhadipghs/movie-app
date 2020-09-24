import React from 'react'
import Form from '../../components/Form'
import Label from '../../components/Label'
import Input from '../../components/Input'
import Layout from './Layout'
import MovieCardList from '../../components/MovieCardList'
import {getMovieSearch} from '../../redux/actions/movies'
import {connect} from 'react-redux'
import {Provider} from 'react-redux'
import store from '../../redux/store'
import styles from './App.module.css'

const movies = [
  {
    id: 1,
    title: 'Jurassic',
    image: '',
    rating: 10,
    releaseDate: '10-3-2002',
    about:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus laudantium temporibus beatae suscipit cumque! Quisquam, sunt? Iste minus assumenda deserunt earum consequuntur? Ab itaque excepturi repellat et beatae officia quidem.',
  },
  {
    id: 1,
    title: 'Jurassic',
    image: '',
    rating: 10,
    releaseDate: '10-3-2002',
    about:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus laudantium temporibus beatae suscipit cumque! Quisquam, sunt? Iste minus assumenda deserunt earum consequuntur? Ab itaque excepturi repellat et beatae officia quidem.',
  },
]

function App(props) {
  const [query, setQuery] = React.useState('')

  function submitted(e) {
    e.preventDefault()
    props.getMovieSearch(props)
  }

  return (
    <Provider store={store}>
      <Layout>
        <Form submitted={e => submitted(e)} className={styles.formStyle}>
          <Label htmlFor="query">Movie Name</Label>
          <Input
            type="text"
            name="query"
            id="query"
            placeholder="Enter Movie name..."
            value={query}
            changed={e => setQuery(e.target.value)}
            variant="pill"
            padding="0rem 1rem"
            margin="0rem 1rem"
          />
          <Input
            type="submit"
            value="Search"
            variant="pill"
            className={styles.inputSubmit}
            width="4rem"
            noBorder
          />
        </Form>
        <div
          style={{
            display: 'grid',
            placeItems: 'center',
            margin: '1rem 0rem',
          }}
        >
          <MovieCardList movies={movies} />
        </div>
      </Layout>
    </Provider>
  )
}

const mapStateToProps = state => {
  return {
    all: state.movie,
  }
}

export default connect(mapStateToProps, {getMovieSearch})(App)
