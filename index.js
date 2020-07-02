const { graphql, buildSchema } = require('graphql')

// Create schema
const schema = buildSchema(`
    type Query {
        hello: String,
        bye: String
    }
`)

// Resolvers
const resolvers = {
    hello: () => "Hello, world",
    bye: () => "Bye world"
}

// Execute query
graphql(schema, '{ hello }', resolvers)
    .then( data => {
        console.log(data)
    } )
    .catch( errors => {
        console.error(errors)
    })