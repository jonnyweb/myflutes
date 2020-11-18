import React from 'react'
import { hydrate } from 'react-dom'
import { renderToString } from 'react-dom/server'
import App from './App'
import once from 'lodash.once'

const app = document.getElementById('app')

if (document && app) {
  window.addEventListener(
    'load',
    () => {
      hydrate(<App />, app)
    },
    false
  )
}

export default () => {
  return `<div id="app">${renderToString(<App />)}</div>`
}
