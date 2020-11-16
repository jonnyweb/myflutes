import React from 'react'
import { hydrate } from 'react-dom'
import { renderToString } from 'react-dom/server'
import App from './App'
import once from 'lodash.once'

const app = document.getElementById('app')

const hydrateApp = once(() => {
  if (app && app.hasChildNodes()) {
    hydrate(<App />, app)
  }
})

document.addEventListener('scroll', hydrateApp)
document.addEventListener('mousemove', hydrateApp)
document.addEventListener('click', hydrateApp)

export default () => {
  return `<div id="app">${renderToString(<App />)}</div>`
}
