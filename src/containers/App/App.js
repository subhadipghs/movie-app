import React from 'react'
import Form from '../../components/Form'
import Label from '../../components/Label'
import Input from '../../components/Input'
import Loading from '../../components/Loading'
import Layout from './Layout'
import Grid from './Grid'
import ErrorMessage from './ErrorMessage'
import MovieCardList from '../../components/MovieCardList'
import {getMovieSearch} from '../../redux/actions/movies'
import {connect} from 'react-redux'
import styles from './App.module.css'

function App({movies, finished, loading, error, getMovieSearch}) {
  const [query, setQuery] = React.useState('')
  const [isQueried, setIsQueried] = React.useState(false)
  console.log('loading', loading, 'movies', movies, 'finsh', finished)

  function getMovie(e) {
    e.preventDefault()
    getMovieSearch(query)
    setIsQueried(true)
  }

  function setQueryString(e) {
    setQuery(e.target.value)
  }

  return (
    <Layout>
      <Form submitted={e => getMovie(e)} className={styles.formStyle}>
        <Label htmlFor="query">Movie Name</Label>
        <Input
          name="query"
          id="query"
          placeholder="Enter Movie name..."
          value={query}
          changed={e => setQueryString(e)}
          variant="pill"
        />
        <Input
          type="submit"
          value="Search"
          variant="pill"
          className={styles.inputSubmit}
          noBorder
        />
      </Form>
      <Grid margin={1}>
        {loading === true ? <Loading /> : null}
        {!loading && movies.length > 0 ? (
          <MovieCardList movies={movies} />
        ) : finished ? (
          <ErrorMessage>Sorry! No movies found</ErrorMessage>
        ) : null}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Grid>
    </Layout>
  )
}
// map the movie states to props of App
const mapStateToProps = state => {
  return {
    movies: moviesSelector(state),
    loading: loadingSelector(state),
    error: errorSelector(state),
    finished: finishedSelector(state),
  }
}
// error state selector

const errorSelector = state => state.movies.error

// select the loading state
const loadingSelector = state => state.movies?.loading

// select the results from the fetched results
const moviesSelector = state => state.movies?.data?.results ?? []

// select the finsished state
const finishedSelector = state => state.movies.finished

export default connect(mapStateToProps, {getMovieSearch})(App)
