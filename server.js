const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/recipes/:urlId', (req, res) => {
        const actualPage = '/recipe'
        const queryParams = { urlId: req.params.urlId }
        app.render(req, res, actualPage, queryParams)
      })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(process.env.PORT || 3000, err => {
      if (err) throw err
      console.log('> Server is ready on port ' + process.env.PORT + ' or port 3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })