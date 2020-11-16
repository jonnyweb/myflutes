import React from 'react'
import { hydrate } from 'react-dom'
import { renderToString } from 'react-dom/server'
import App from './App'

const app = document.getElementById('app')

if (app && app.hasChildNodes()) {
  hydrate(<App />, app)
}

export default () => {
  return `<div id="app">${renderToString(<App />)}</div>`
}
