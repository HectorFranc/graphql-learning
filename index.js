const { buildSchema } = require('graphql')
const express = require('express')
const gqlMiddleware = require('express-graphql')

const resolvers = require('./lib/resolvers')

const { readFileSync } = require('fs')
const { join } = require('path')

const port = process.env.port || 3000
const app = express()

// Create schema
const schema = buildSchema(
    readFileSync(
        join(__dirname, 'lib', 'schema.graphql'),
        'utf-8'
    )
)

// Server
app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})
