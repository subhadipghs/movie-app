import React from 'react'
import ReactDOM from 'react-dom'
import {Helmet} from 'react-helmet'
import App from './containers/App'
import {ThemeProvider} from 'styled-components'
import {Provider} from 'react-redux'
import store from './redux/store'
import {theme} from './styles/theme'
import GlobalStyle from './styles/global'

// the element with app id
const root = document.getElementById('app')
// app
const app = (
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Helmet>
          <title>Movie App</title>
          <meta
            name="description"
            content="Movie App. Search for the movies you want made with React"
          />
        </Helmet>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
// render the app at root
ReactDOM.render(app, root)
