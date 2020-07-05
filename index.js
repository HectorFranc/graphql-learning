const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const cors = require('cors')
const gqlMiddleware = require('express-graphql')

const resolvers = require('./lib/resolvers')
const errorHandler = require('./utils/errorHandler')

const { readFileSync } = require('fs')
const { join } = require('path')

const port = process.env.port || 3000
const isDev = process.env.NODE_ENV !== 'production'
const app = express()

// Create schema
const typeDefs = readFileSync(
    join(__dirname, 'lib', 'schema.graphql'),
    'utf-8'
)
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

app.use(cors())

// Server
app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: isDev,
  customFormatErrorFn: errorHandler,
}))

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})
