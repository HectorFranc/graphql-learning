const { buildSchema } = require('graphql')
const express = require('express')
const gqlMiddleware = require('express-graphql')

const port = process.env.port || 3000
const app = express()

// Create schema
const schema = buildSchema(`
    type Query {
        "Retorna un saludo"
        hello: String,
    }
`)

// Resolvers
const resolvers = {
    hello: () => "Hello, world",
}

// Server
app.use('/api', gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
}))

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}/api`)
})