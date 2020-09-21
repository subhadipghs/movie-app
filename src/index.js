import React from 'react'
import ReactDOM from 'react-dom'

// the element with app id
var root = document.getElementById('app')
// app
var AppJSX = (
  <React.StrictMode>
    <div>Running App </div>
  </React.StrictMode>
)
// render the app at root
ReactDOM.render(AppJSX, root)
