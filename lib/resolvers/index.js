const queries = require('./queries')
const mutations = require('./mutations')
const interfaces = require('./interfaces')

const types = require('./types')

module.exports = {
    Query: queries,
    Mutation: mutations,
    ...types,
    ...interfaces,
}