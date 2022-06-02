import express from 'express'
import cors from 'cors'
import * as React from 'react'
import ReactDOM from 'react-dom/server'
import { matchPath } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server';
import serialize from 'serialize-javascript'
import App from '../shared/App'
import routes from '../shared/utilities/routes'

const app = express()

app.use(cors())
app.use(express.static('dist'))

app.get('*', (req, res, next) => {
  const activeRoute = routes.find((route) => matchPath(route.path, req.url)) || {}

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve()

  promise.then((data) => {
    const markup = ReactDOM.renderToString(
      <StaticRouter location={req.url} >
        <App serverData={data} />
      </StaticRouter>
    )

    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Joseph Web Development</title>
          <script src="/bundle.js" defer></script>
          <link href="/main.css" rel="stylesheet">
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>

        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `)
  }).catch(next)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} mode at http://localhost:${PORT}`)
})